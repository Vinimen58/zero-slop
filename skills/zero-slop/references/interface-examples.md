# Interface examples

Use these scenarios to make audits concrete. They illustrate common failure modes and possible fixes; a pattern is a defect only when project evidence shows it blocks, misleads, or materially burdens users.

Visual companion: [20 numbered interface examples](../assets/interface-examples.png).

## Scenario index

- **1 through 20:** Core user journeys, content, and common product states.
- **21 through 40:** Offline behavior, collaboration, data management, localization, and device flows.
- **41 through 60:** Navigation, input methods, and responsive interaction.
- **61 through 80:** Forms, transactions, billing, and operational feedback.
- **81 through 100:** Accessibility, privacy, internationalization, and system errors.
- **101 through 102:** Interface punctuation and font selection.

1. **Search with no useful result state.** A catalog search returns a blank panel for a typo. Confirm whether the query ran and whether items exist; show a clear no-results message, retain the query, and offer relevant recovery such as clearing filters or correcting a spelling.
2. **Checkout action with no explanation.** The primary button is disabled while a required address field is invalid, but the form gives no cue. Identify the blocking field and explain the requirement near it; keep the button state understandable.
3. **Dashboard full of decorative charts.** A dashboard has several colorful graphs with no labels, units, date range, or action. Check whether the metrics answer a user task; add meaningful names, units, time context, and a path to the underlying records, or remove non-informative charts.
4. **Form errors only shown after submission.** A long form rejects an entry but jumps to the top without identifying the field. Preserve entered values, move focus to a clear error summary, and associate each message with its field.
5. **Empty task list with generic filler.** A first-use screen shows an illustration and “Nothing here” without a next step. Verify whether users can create, import, or connect data; explain the empty state and provide the relevant action.
6. **File upload without constraints or progress.** The upload area does not state accepted types or limits and appears frozen during transfer. Show supported formats and size limits, progress, completion, and retryable failure feedback.
7. **Clickable row with no affordance.** A table row navigates when clicked, but no link or action is visible. Make the destination or action discoverable and keyboard accessible; avoid making unrelated controls inside the row ambiguous.
8. **Destructive confirmation with vague wording.** A dialog says “Are you sure?” without naming what will be deleted or whether recovery is possible. State the object and consequence, and make the safe and destructive actions distinguishable.
9. **Mobile table that clips essential data.** On a narrow screen, the last columns and their actions are off-screen with no cue. Test the primary task on mobile; use a fit-for-purpose responsive layout or expose horizontal scrolling and keep key actions reachable.
10. **Time-sensitive data with no freshness cue.** A status or price appears current but has no update time while updates can be delayed. Show when the data was last refreshed and a useful refresh or stale-data state where the workflow depends on freshness.
11. **Status communicated only by color.** Green, amber, and red badges are the only distinction. Check contrast and non-color perception; pair color with text, icon shape, or another accessible cue.
12. **Appointment slots that hide availability rules.** A booking screen shows times but does not explain a selected slot becoming unavailable. Confirm the server rechecks availability; explain conflicts and let the user choose another slot without losing other entries.
13. **Financial total without a breakdown.** A checkout or invoice shows one unexpected total. Verify calculations and currency formatting; show relevant subtotal, fees, tax, discount, and the basis for the total before confirmation.
14. **Product page missing purchase-critical details.** A product view has polished imagery but omits stock, delivery estimate, or return terms near the purchase decision. Identify which details affect the user's choice and present accurate information in context.
15. **Schedule with ambiguous time zone.** An event time is shown without a zone even though attendees can be remote. Show the relevant local zone and handle daylight-saving changes consistently; make conversions explicit when they affect attendance.
16. **Feedback submission with no outcome.** A user submits a form and the page simply resets. Confirm whether the request succeeded; show a success state and reference or next step where useful, and preserve input after recoverable errors.
17. **Sign-in error that erases the form.** A failed login clears the email and gives a generic message. Preserve safe input, identify the actionable problem without exposing sensitive account data, and offer the relevant recovery path.
18. **Filters that silently reset.** Applying a filter or moving between pages discards selections with no indication. Check expected behavior across sorting, pagination, and navigation; preserve state where useful and provide a clear reset action.
19. **Permissions screen with unclear impact.** A role editor uses labels like “standard” or “advanced” without describing access. Verify the actual permission mapping; explain capabilities and scope so an administrator can predict the effect before saving.
20. **Map-only location results.** A location finder exposes results only as pins that are difficult to compare or use with assistive technology. Provide a synchronized list with names, key details, and keyboard-accessible selection; keep map and list state aligned.
21. **Offline mode that looks like success.** A disconnected user edits a record, but the interface implies the change was saved to the server. Distinguish local saving from server sync, preserve queued changes, and explain what will happen when the connection returns.
22. **Notification settings with unclear scope.** A toggle labeled “Updates” affects several unrelated message types. Show what each preference controls and whether it changes email, push, or in-app delivery; confirm saved state.
23. **Cancellation that hides its consequence.** A subscription page offers a prominent cancel action but does not explain the end date or loss of access. State the effective date, data or feature impact, and any available continuation choice before confirmation.
24. **Bulk action with hidden selection count.** A table allows “Delete selected” while the selected rows are off-screen. Keep selection state and count visible, scope the action to that selection, and report partial failures by item.
25. **Pagination that loses context.** Sorting or returning from a detail view sends a user to page one with cleared filters. Check the expected workflow; preserve query, sort, and page state when it helps users continue their task.
26. **Draft that disappears on navigation.** A user leaves a long editor and loses unfinished work without warning. Verify draft persistence and autosave timing; show saved status and a recovery path when persistence fails.
27. **Import mapping with no preview.** A spreadsheet import silently maps source columns to the wrong fields. Show a sample preview, let users correct mappings, validate required columns, and report row-level errors before finalizing.
28. **Export with no completion feedback.** An export button closes immediately while a large report is still being prepared. Show job progress or a clear queued state, explain where the file will appear, and communicate expiration or failure.
29. **Support handoff that drops context.** A chat transfer asks the user to repeat the issue and account details. Check what context is safely available; carry over the conversation summary and identify what the user still needs to provide.
30. **Comment thread with ambiguous resolution.** A “Resolve” control hides a discussion without explaining who can see or reopen it. Clarify the state change, provide a visible resolved view, and support reopening where the workflow requires it.
31. **Concurrent edit conflict with silent overwrite.** Two collaborators edit the same record and the later save discards the earlier change. Make the conflict explicit, preserve both versions, and offer a meaningful comparison or safe merge path.
32. **Search shortcut with no visible discovery.** A keyboard shortcut exists but the interface never signals it, so users cannot find the faster route. Surface shortcuts in relevant controls or help, and ensure a usable pointer and touch alternative remains available.
33. **Account deletion with unclear data scope.** A delete-account flow names the account but not which records, shared resources, or exports will be removed. Explain the actual data effects and recovery window accurately before the irreversible step.
34. **Consent settings that cannot be revisited.** A privacy banner offers choices once, then provides no way to review them. Provide a persistent settings entry point and accurately describe optional versus essential processing.
35. **Saved view that is not actually saved.** A user names a filter view, but it resets after reload or is visible only to its creator without indication. Verify persistence and sharing behavior; label ownership and visibility before saving.
36. **Localized values with mixed conventions.** Dates, decimal separators, units, or currency symbols conflict with the user's locale. Check parsing as well as display; use unambiguous formats for critical values and preserve the source value where conversion matters.
37. **Keyboard focus lost after a modal action.** Closing a dialog returns focus to the page start or an unrelated control. Return focus to the control that opened it, keep focus within an active modal, and make the next keyboard step predictable.
38. **Media player without accessible controls.** Playback relies on hover-only buttons or lacks captions for spoken content. Provide keyboard-operable controls, visible focus, captions or transcripts where appropriate, and clear playback state.
39. **Device pairing without recovery guidance.** A setup screen shows a code but no expiry, retry path, or explanation when pairing fails. State the code lifetime, show device status, and provide safe steps to retry or replace the code.
40. **Inventory quantity that ignores reservations.** A product appears available even though another checkout has reserved the remaining stock. Verify the source of truth and reservation window; distinguish available, reserved, and backordered quantities where they affect the purchase.

## Navigation, interaction, and responsive behavior

41. **Drag-only file selection.** A drop zone works with a mouse drag but has no browse button or keyboard path. Provide a standard file picker and make the drop target operable without dragging.
42. **Hover-only help.** Important instructions appear only when a pointer hovers over an icon. Make the explanation available on focus and touch, and keep it open long enough to read.
43. **Sticky header hides the focused control.** Keyboard navigation moves focus behind a fixed header or toolbar. Check the visible focus position during scrolling and account for fixed elements when focusing anchors or fields.
44. **Route change leaves focus in the old page.** Client-side navigation updates the view while screen-reader and keyboard users remain at a stale control. Move focus or announce the new page title and preserve a predictable reading position.
45. **Browser Back discards work context.** Returning from a detail view resets search, sort, or scroll position. Preserve the state that supports the user's return path, and verify it works with browser history.
46. **Infinite scroll has no end or recovery.** A feed silently stops loading or makes it difficult to return to previously seen items. Expose loading and end states, preserve position, and provide a reliable way to reach older or earlier results.
47. **Pagination is inaccessible after updates.** Refreshing a list replaces its rows while keyboard focus jumps to the document start. Keep focus stable, announce meaningful result changes, and retain the current page when it remains valid.
48. **Touch targets are difficult to activate.** Dense mobile controls sit close together and trigger the wrong action. Test with touch-sized targets and spacing; keep destructive and frequent actions distinct.
49. **Sticky action bar covers the last field.** A fixed submit bar overlaps content when the mobile keyboard opens. Check common viewport and keyboard sizes, and allow users to scroll to and edit the obscured content.
50. **Orientation change resets a task.** Rotating a device clears entered data or resets a multi-step flow. Preserve state across orientation changes and make the layout adapt without losing the task context.
51. **Text enlargement breaks essential controls.** At increased text size, labels clip or actions disappear. Verify reflow and zoom behavior; let content grow and keep primary actions reachable.
52. **Dialog content extends beyond the viewport.** A long confirmation or settings dialog has no internal scroll path and hides its buttons. Keep the dialog usable at short heights, with visible actions and a clear way to close it.
53. **Nested scrolling traps the user.** A panel scrolls independently inside a page, making trackpad, touch, or keyboard scrolling unpredictable. Reduce nested scroll regions or provide clear boundaries and keyboard access.
54. **Navigation does not show the current location.** A persistent menu looks identical on every route, so users cannot tell where they are. Mark the active destination programmatically and visually when it helps orientation.
55. **Breadcrumbs contradict the page hierarchy.** A breadcrumb links to a category that does not contain the current item or loses useful filters. Match it to the actual information architecture and verify each parent destination.
56. **Collapsed sidebar removes navigation names.** Icon-only navigation has ambiguous symbols and no accessible names. Provide persistent labels, tooltips that work with keyboard and touch, and programmatic names for each action.
57. **Autocomplete suggestions cannot be selected by keyboard.** Suggestions appear under a field, but arrow keys and Enter do not select them consistently. Support the expected keyboard pattern, announce the suggestion count, and allow free text when the field permits it.
58. **Dialog opens with focus in the wrong place.** A modal starts focus behind its heading or on an unrelated destructive button. Place initial focus according to the task, keep it inside while open, and return it to the opener when closed.
59. **Escape silently discards in-progress work.** Pressing Escape closes an editor or dialog with unsaved changes. Confirm the intended dismissal behavior; preserve drafts or offer a clear discard decision when data would be lost.
60. **Undo message disappears before it can be used.** A brief toast offers the only way to reverse a change, then vanishes too quickly. Keep recovery available for a reasonable period or provide a persistent route to undo the action.

## Forms, transactions, and billing

61. **Multi-step flow has no progress context.** A wizard asks for several sets of details without showing the current step or remaining work. Show progress and a concise step summary when it helps users plan and review.
62. **Conditional fields erase valid answers.** Changing an earlier choice hides later fields and deletes entries that may be needed if the choice changes back. Preserve values where safe and make dependent fields clear.
63. **Numeric field rejects local number formats.** A quantity or price field silently misreads decimal separators or pasted values. Define accepted formats, parse them consistently, and show the interpreted value before committing high-impact amounts.
64. **Date range accepts impossible combinations.** A report or booking form allows an end date before the start date and fails only after submission. Validate the relationship between fields and explain the constraint at the point of entry.
65. **Remote autocomplete commits a stale result.** A user types quickly and selects a suggestion from an earlier query. Bind suggestions to the current query, ignore stale responses, and confirm the selected entity before submission.
66. **Double-click creates duplicate transactions.** A slow submit allows repeated clicks to send the same order or payment. Prevent duplicate processing and show a clear in-progress state until the result is known.
67. **Out-of-order validation overwrites the latest error.** A delayed server response for an earlier field value replaces feedback for a newer value. Associate validation with the submitted value and ignore stale responses.
68. **Replacing a file destroys the working upload.** Selecting a new attachment removes the current one before the replacement succeeds. Preserve the existing file until the new upload completes or can be recovered.
69. **Partial save appears to save everything.** A form saves one section but leaves another section unsaved without indicating the difference. Make save scope and status visible, and show which sections still need action.
70. **Payment decline gives no useful next step.** A failed payment shows a generic error and leaves the order state unclear. Explain safe recovery options, preserve the cart, and distinguish a declined payment from an unknown processing result.
71. **Payment method entry gives no format or security cue.** Users cannot tell what account details are required or whether the field accepted them. Label the expected format, mask sensitive values appropriately, and show validation without exposing full secrets.
72. **Quote changes after confirmation.** A price or delivery estimate changes between review and purchase without showing why. Reconfirm material changes before charging and identify which amount or terms changed.
73. **Shipping fee appears only after payment details.** A user reaches the final step before seeing the actual delivery cost. Surface accurate shipping options and fees before the purchase commitment.
74. **Stock becomes unavailable after checkout starts.** A shopper enters delivery details before learning the item is no longer available. Recheck availability before commitment, explain the conflict, and preserve the rest of the order where possible.
75. **Order status has no actionable meaning.** A status label such as “Processing” does not tell the user what happens next or when to check again. Use accurate milestones and provide a next step when the user can take one.
76. **Refund flow obscures amount and destination.** A refund request does not clearly state how much will be returned or where it will go. Show the calculated amount, destination, expected timing, and any exceptions before submission.
77. **Promotion error does not explain eligibility.** A coupon is rejected with “Invalid” even though it has a minimum spend or product restriction. Explain the relevant condition without exposing private campaign rules.
78. **Trial end date is hidden.** A free trial begins without a clear end date, first charge, or cancellation path. Show the date and terms at enrollment and make them easy to find later.
79. **Plan change hides proration or timing.** A subscription upgrade or downgrade does not say when the new price takes effect. Explain the effective date and any prorated charge or credit before saving.
80. **Rate limit offers no retry guidance.** Repeated actions are blocked with a generic failure. State when the user can retry or whether the system will retry automatically, and avoid encouraging repeated submissions.

## Accessibility, privacy, internationalization, and system feedback

81. **Visual order differs from keyboard order.** CSS rearranges controls so keyboard focus moves in a confusing sequence. Verify focus order against the intended reading and task order, including responsive layouts.
82. **Table headers are not connected to data cells.** A screen reader announces values without their column or row context. Use semantic headers and associations, and add a simpler layout when the data does not work as a table on small screens.
83. **Chart has no usable data alternative.** A visual chart is the only way to inspect important values. Provide a concise summary and an accessible table or equivalent interaction for the underlying data.
84. **Live changes are invisible to assistive technology.** A status updates on screen while keyboard and screen-reader users receive no announcement. Announce meaningful changes without speaking every transient update.
85. **Icon button has no accessible name.** An unlabeled icon is understandable visually but is announced as an unnamed button. Give the control a concise name that describes its action and current state where relevant.
86. **Low contrast makes secondary text unreadable.** Muted labels or disabled controls blend into the background. Check contrast at actual sizes and states, and keep disabled explanations readable when users need them.
87. **Animation ignores reduced-motion preference.** A transition causes discomfort or blocks orientation for users who request less motion. Respect the system preference and keep essential state changes clear without animation.
88. **Image gallery cannot be understood without images.** Product or editorial images convey distinctions that are not described in text. Supply concise alternative text for informative images and mark purely decorative images appropriately.
89. **Text-size preference resets on return.** A user sets larger text, then loses the choice after reloading or moving between routes. Persist the preference where expected and apply it consistently across the product.
90. **Language choice is not retained.** A user selects a language but later screens revert to another language. Keep the chosen locale across routes and sessions as appropriate, and label the language selector in a way users can identify.
91. **Right-to-left layout keeps left-to-right assumptions.** Navigation, icons, and reading order remain reversed incorrectly for a right-to-left language. Test layout, text direction, numbers, and directional icons with realistic localized content.
92. **Translated copy overflows fixed controls.** Longer translations clip buttons, dialogs, or labels. Test with expanded text and let components grow or wrap without hiding essential content.
93. **Sensitive values are revealed without user intent.** A dashboard exposes private account or health details in a shared-screen context. Review defaults, masking, and reveal controls against the task and user expectations.
94. **Copy action gives no confirmation.** A button copies a token or reference number but provides no feedback. Confirm success in an accessible way and provide an error path if clipboard access is denied.
95. **Masked identifier cannot be verified.** A user sees only the last few digits of an account or phone number and cannot tell which saved destination is being used. Provide a safe way to identify or update it without exposing the full value.
96. **Session expires without warning.** A long task loses unsaved work when authentication expires. Warn users when possible, preserve recoverable input, and explain whether reauthentication will resume the task.
97. **One-time code entry fails with common input methods.** Separate digit boxes reject pasted codes or disrupt keyboard navigation. Support paste and autofill where appropriate, keep focus predictable, and offer a clear resend or alternate method.
98. **Challenge verification has no accessible fallback.** A CAPTCHA or device check blocks users who cannot complete its default interaction. Provide an equivalent alternative and a clear support path.
99. **Access request has no decision state.** A user requests access but cannot tell whether it was sent, is pending, or was denied. Show the current state, who can act next when appropriate, and how to correct or resubmit a request.
100. **System error cannot be reported or recovered from.** A generic error gives no next step and no reference for support. Preserve safe user input, explain what can be retried, and provide a request identifier when support needs to investigate.

## Interface copy and typography

101. **Long dash used as interface punctuation.** A helper message or notification splits one thought with an em dash or en dash, making routine UI copy feel generated or editorialized. Rewrite it as a short sentence or use a period, comma, colon, parentheses, or line break; retain hyphens only for established spelling or notation.
102. **Typography defaults to an AI-familiar font.** A new screen uses Inter, Roboto, Poppins, Geist, or Space Grotesk without reference to the product identity. Check existing brand tokens and bundled fonts, then select a legible, available typeface with suitable language coverage; use a common font when product evidence supports it.
