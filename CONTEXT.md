# Project Context

This repository packages the `zero-slop` skill for product interface audits and implementation work.

## Package structure

- `skills/zero-slop/` is the installable skill directory.
- Its `SKILL.md` contains the core workflow.
- Its `references/interface-examples.md` contains 102 concrete scenarios.
- Its `assets/interface-examples.png` contains a visual atlas with 20 numbered mockups.
- `.claude-plugin/plugin.json` lets Claude Code discover the repository as a plugin.
- `scripts/validate-skill.mjs` checks the package without third-party dependencies.

## Editing constraints

Keep repository content in English. Product interface copy follows the product or user's requested locale. In rendered interface copy, do not use em dash or en dash punctuation. Avoid choosing the common AI-default typefaces without product evidence. Treat the scenario library as guidance, not a product checklist.

## Release state

The initial package version is 1.0.0. The project has no external dependencies and is marked `UNLICENSED` until the owner chooses a license.
