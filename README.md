# Call Task Hub

![Call Task Hub browser preview](docs/preview.png)


**Browser:** usable local demo. **Claude artifact:** optional AI extraction. **Slack/Linear integrations:** simulated in the app.

## Try it

1. Open `index.html` in a browser. It starts with fictional calls and tasks.
2. Use **Add transcript**, supply speaker-labelled lines, the meeting date, and your name.
3. Extract locally, review owners and dates, and edit the results.
4. Open a Slack or Linear composer to draft and copy text. Send/create buttons change the local demo state only.

For a reproducible extraction example, see [the fixture](examples/call-task-hub.json). Data is saved in this browser's local storage.

## Optional Claude artifact

Supply this HTML file to a Claude host that can create artifacts and request the `sample` capability. When granted, the app exposes **Extract with Claude** and acceptance-criteria drafting. These capabilities are host-dependent and have not been exercised in the validation record.

Publishing the artifact does not make Slack or Linear buttons live. For real handoffs, use the [companion skill](skills/call-task-hub/SKILL.md) with connected tools and review the proposed text and destination.

## Limitations and validation

Keyword extraction recognises a limited set of English phrases and speaker-labelled lines. It can miss implied actions and must be reviewed. Demo ticket identifiers are invented. Local data has no team sync or server backup.

Automated checks cover relative dates, decisions without due dates, and negative statements; browser smoke checks are recorded in [validation](docs/validation.md).


## Standalone repository

This app was extracted from PM Toolkit. It contains its own HTML, screenshot, license, companion instructions and relevant examples. There is no build step and no package installation required to open the page. Optional Google Fonts requests need an internet connection; system fonts are the fallback.

For a local web address, run `python3 -m http.server 8000` in this folder and open [the app](http://localhost:8000). This local server does not enable any connected feature.

Companion instructions are included as files for a compatible assistant host. They do not install themselves, connect accounts, or schedule runs. Review their proposed external writes before authorizing them.

Run the inherited offline regression checks with `node --test tests/app.test.cjs` (Node.js 20 or newer). No model calls or credentials are needed.
