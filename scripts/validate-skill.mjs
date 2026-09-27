import { existsSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const skillDir = resolve(root, "skills/zero-slop");
const skillPath = resolve(skillDir, "SKILL.md");
const referencePath = resolve(skillDir, "references/interface-examples.md");
const assetPath = resolve(skillDir, "assets/interface-examples.png");
const manifestPath = resolve(root, ".claude-plugin/plugin.json");
const packagePath = resolve(root, "package.json");
const errors = [];
let scenarioCount = 0;

for (const path of [skillPath, referencePath, assetPath, manifestPath, packagePath]) {
  if (!existsSync(path)) errors.push(`Missing required file: ${path.slice(root.length + 1)}`);
}

if (errors.length === 0) {
  const skill = readFileSync(skillPath, "utf8");
  const reference = readFileSync(referencePath, "utf8");
  const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
  const packageJson = JSON.parse(readFileSync(packagePath, "utf8"));
  const skillFrontmatter = skill.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  const scenarioNumbers = [...reference.matchAll(/^(\d+)\.\s/gm)].map((match) => Number(match[1]));
  scenarioCount = scenarioNumbers.length;
  const expectedNumbers = Array.from({ length: scenarioNumbers.length }, (_, index) => index + 1);

  if (!skillFrontmatter) errors.push("SKILL.md must begin with YAML frontmatter.");
  else {
    if (!/^name:\s*zero-slop\s*$/m.test(skillFrontmatter[1])) errors.push("SKILL.md frontmatter must name the skill zero-slop.");
    if (!/^description:\s*\S/m.test(skillFrontmatter[1])) errors.push("SKILL.md frontmatter must include a description.");
  }

  if (!skill.includes("references/interface-examples.md")) errors.push("SKILL.md must link to the interface examples reference.");
  if (scenarioNumbers.length < 20) errors.push("The examples reference must contain at least 20 numbered scenarios.");
  if (scenarioNumbers.some((number, index) => number !== expectedNumbers[index])) errors.push("Scenario numbers must be unique and continuous from 1.");
  if (!manifest.name || manifest.name !== "zero-slop") errors.push("The Claude plugin manifest must use the name zero-slop.");
  if (!packageJson.scripts?.validate) errors.push("package.json must define the validate script.");
}

if (errors.length > 0) {
  console.error("Skill validation failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log("Skill package validation passed.");
  console.log(`Checked skill frontmatter, ${scenarioCount} continuous scenarios, visual asset, plugin manifest, and package scripts.`);
}
