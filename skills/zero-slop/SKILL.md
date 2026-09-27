---
name: zero-slop
description: Use when building, refining, or auditing an application with generic design, placeholder content, hollow interactions, unfinished states, or weak usability.
---

# Zero Slop

Make the application feel and behave like a deliberate product, grounded in its users, purpose, and real behavior. Treat “slop” as a concrete usability, content, visual, or implementation problem grounded in evidence and user impact.

Keep this skill, its examples, and supporting documentation in English. Write product interface copy in the language and locale required by the product or user request.

## Set the scope

- Read the request and inspect the project before editing. Identify the relevant routes, user flows, data and integrations, design conventions, product language, and assets.
- Match the work to the request: an audit is read-only unless the user asks for fixes; a focused change stays within its requested surface; a whole-product review covers every route or major screen and its primary flows.
- Inspect only what is needed for the requested scope. Do not turn a focused task into a whole-app redesign. Report relevant out-of-scope findings briefly instead of silently expanding the work.
- Infer low-risk details from the request and project. Ask only when missing information materially changes the direction or makes a safe, useful result impossible.

## Use product evidence

- Follow supplied visual references for the details they show. Follow a more specific user instruction when it conflicts with a reference. Preserve accessibility and working product behavior; explain any conflict that prevents a faithful implementation.
- Use the request and project materials for functionality, content, and details the reference does not show.
- Without a reference, derive the visual and content direction from the product, audience, and existing materials. Avoid a familiar template unless it fits the product.

## Keep interface copy and typography deliberate

- Do not use em dash or en dash punctuation in any user-facing interface copy. Apply this to all rendered text, including headings, button labels, helper text, empty states, errors, confirmations, notifications, tooltips, and examples. Rewrite the sentence or use a period, comma, colon, parentheses, or line break. Keep ordinary hyphens only where spelling or established notation requires them.
- Do not default to the familiar AI-generated font pool, including Inter, Roboto, Arial, Open Sans, Lato, Poppins, Montserrat, Geist, Space Grotesk, or generic system sans stacks. Treat these as options only when the existing brand, supplied reference, platform constraints, language coverage, or demonstrated readability calls for them.
- Inspect the product's existing font files, tokens, and brand guidance before selecting type. Choose fonts for the product's character, audience, language and script coverage, legibility, and available weights. Do not introduce an unusual font just to appear distinctive; verify that it is available and renders the needed characters.

## Find and prioritize concrete issues

Judge each issue in context. A familiar pattern is not a defect when it serves the product or matches the requested direction. Separate functional or usability defects from subjective preferences, then address the highest-impact issues first:

1. Blocked primary flows, misleading or incorrect data, and barriers to using essential features.
2. Controls that do nothing, mock-only flows, broken navigation, missing persistence, or missing loading, empty, error, and success feedback.
3. Responsive or accessibility problems that materially prevent use or block an essential task.
4. Placeholder or generic content and visual choices that conflict with the product or supplied reference.
5. Fragile, duplicated, or needlessly complex implementation when it causes defects, behavior risk, or substantial maintenance cost in the requested scope.

Keep fixes focused. Avoid broad rewrites or stylistic changes unsupported by the request, product, or reference. Do not change unrelated behavior to address a cosmetic preference.

For one hundred and two concrete UI scenarios and practical recommendations, consult [references/interface-examples.md](references/interface-examples.md). Treat the examples as calibration, not a checklist: verify that each issue applies to the product in scope.

## Make requested changes

- For audit-only requests, return findings with impact and a practical recommendation; do not edit code. For implementation, audit-and-fix, or polish requests, fix the concrete issues within the requested scope.
- Preserve real product behavior, integrations, and data. Do not replace a working flow with a mock response.
- Do not deploy, publish, or mutate live data unless the user explicitly requests that action.

## Verify in proportion to the change

- When the app can run, inspect the rendered surfaces affected by the work and exercise the changed interactions. Check desktop and mobile layouts when layout or responsive behavior changed.
- For a whole-product review, cover every route or major screen and its primary flows. For a focused change, verify the affected surface and any directly connected flow.
- Run automated tests only when the user asks for testing or implementation verification. Do not add tests by default. Never claim a check passed unless you observed it pass.
- If execution, credentials, or environment setup blocks verification or a fix, continue where possible and state exactly what remains unverified or unresolved and why.

## Finish

Summarize the changes and observed verification briefly. Mention unresolved in-scope issues, blockers, and any notable out-of-scope findings; do not present known issues as completed work.
