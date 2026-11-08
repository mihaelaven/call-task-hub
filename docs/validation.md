# Testing and limitations

## Checked

Two automated tests pass for transcript extraction, relative dates, decisions and explicitly declined actions. Basic browser checks cover the fictional workspace and local controls.

The extraction checks also cover JavaScript syntax, bundled files and local documentation links.

## Next checks

- Claude extraction and acceptance-criteria drafting.
- Real Slack posts and Linear issues through the companion instructions.
- More browsers, mobile layouts and longer transcripts.

## Before using real data

Start with fictional data and a test destination. Review owners, dates, source links and proposed writes. Keep a separate copy of important results.

## Repeat the automated checks

Use Node.js 20 or newer:

```sh
node --test tests/app.test.cjs
```

These checks run locally and in GitHub Actions. They use bundled examples and local code.
