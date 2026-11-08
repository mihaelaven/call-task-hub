---
name: call-task-hub
description: Turn a meeting transcript into actions, decisions and open questions. Review owners and dates, then draft Slack posts or Linear issues for approval.
---

# Call Task Hub companion instructions

Use these steps in a compatible assistant host. Use the user's connected accounts. Each Slack post or Linear issue needs approval of the exact text and destination.

## 1. Read the transcript

Use pasted text, an attached file or a connected Notion page. For Notion, find the page by title or date and show its title before reading it. Offer pasted text when connector setup is still pending.

Confirm the meeting date and which speaker is the user. Refer to that speaker as "You".

## 2. Extract the items

Use statements supported by the transcript. Keep each item short:

- **Type:** action, decision or open question.
- **Text:** up to 16 words. Use an action phrase, a decision statement or the question itself.
- **Owner:** the name given in the transcript, or `unassigned`.
- **Due date:** resolve a stated deadline from the meeting date. Leave the date empty for decisions and items with an unstated deadline.
- **Quote:** the speaker and an exact supporting quote, up to 30 words.

Use these date rules: "Thursday" means the coming Thursday after the meeting; "next Thursday" means the following Thursday; "tomorrow" means the next day; "next week" means Friday of the following week.

## 3. Show the results

Group items by Overdue, Today, Next 7 days, Later, Undated, Decisions and Open questions. Put the user's items first within each group. Show type, text, owner and date. Finish with a one-sentence meeting summary.

## 4. Prepare a handoff

For Linear, draft a title, team, priority and assignee. Include context, the meeting date, the supporting quote, a link to the notes and three to five acceptance criteria. Keep a Design section available for relevant links.

For Slack, draft the chosen item or a recap with decisions, actions, owners, dates and open questions.

Show the complete draft and destination. Send or create it after the user approves. When account setup is pending, provide text to copy and explain which connector to configure.

## 5. Open the app

Use `index.html` at the repository root. Check that the file is present, then open it in a browser or supply it to a compatible Claude artifact host. The optional Claude extraction button requires the host's `sample` capability.

The app starts with fictional data. Its Slack and Linear buttons simulate a handoff. Real handoffs use connected tools through this assistant workflow.
