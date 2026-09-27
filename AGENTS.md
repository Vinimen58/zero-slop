# Agent Instructions

## Repository language

Keep repository instructions, examples, and documentation in English. When changing a product interface, use the language and locale requested by the product or user.

## Source of truth

- The maintained skill is `skills/zero-slop/SKILL.md`.
- Supporting scenarios are in `skills/zero-slop/references/interface-examples.md`.
- The visual atlas is `skills/zero-slop/assets/interface-examples.png`.
- Keep local links relative to the skill directory.

## Interface guidance

- Do not use em dash or en dash punctuation in rendered interface copy.
- Do not default to the familiar AI-generated font pool named in the skill. Follow the product's existing identity and accessibility needs.
- Preserve existing behavior and keep changes within the requested scope.

## Validation

Run `npm run validate` after changing the skill package. Do not add dependencies for simple documentation checks.
