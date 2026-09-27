# Zero Slop

An English-language product quality skill for auditing, refining, and building interfaces with evidence from the product, its users, and its real behavior.

## Contents

- `skills/zero-slop/`: the installable skill, 102 practical interface scenarios, and a visual atlas of 20 interface examples.
- `.claude-plugin/plugin.json`: Claude Code plugin metadata.
- `docs/`: maintainer guidance.
- `scripts/`: dependency-free validation.
- `AGENTS.md`, `CLAUDE.md`, and `CONTEXT.md`: repository guidance for AI coding tools and maintainers.

## Use with Codex

Copy the `skills/zero-slop` directory into the Codex skills directory for your user account. The skill should end up at `~/.codex/skills/zero-slop/SKILL.md` on macOS or Linux, or `%USERPROFILE%\.codex\skills\zero-slop\SKILL.md` on Windows.

## Use with Claude Code

Load this repository as a Claude Code plugin. The plugin manifest is in `.claude-plugin/plugin.json`, and the skill is under the root-level `skills/` directory.

## Validate

Requirements: Node.js 20 or later. There are no runtime or development dependencies.

```sh
npm run validate
```

## Scope

The skill uses concrete usability and behavior evidence. Its examples are calibration scenarios, not requirements that apply to every product. It preserves the product's language, brand, accessibility needs, and working behavior.

## License

This repository is currently marked `UNLICENSED`. See [LICENSE](LICENSE) before copying or redistributing its contents.
