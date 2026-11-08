// Run with: node --test tests/toolkit.test.cjs
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const read = p => fs.readFileSync(path.join(root, p), 'utf8');
const json = p => JSON.parse(read(p));
const between = (text, a, b) => {
  const start = text.indexOf(a), end = text.indexOf(b, start + a.length);
  assert.ok(start >= 0 && end > start, `Missing source boundary: ${a} / ${b}`);
  return text.slice(start, end);
};

test('Call Task Hub extracts the dated fixture and excludes negative promises', () => {
  const source = read('index.html');
  const ctx = vm.createContext({});
  vm.runInContext(between(source, 'const pad =', 'function sampleState()') +
    between(source, 'const nextWeekday =', 'async function extractWithClaude'), ctx);
  ctx.input = json('examples/call-task-hub.json');
  const actual = JSON.parse(vm.runInContext('JSON.stringify(extractByKeywords(input.transcript, input.date, input.me))', ctx));
  assert.deepEqual(actual.items.map(({type, owner, due, text}) => ({type, owner, due, text})), ctx.input.expected);
});

test('Call Task Hub resolves next weekday and keeps decisions undated', () => {
  const source = read('index.html');
  const ctx = vm.createContext({});
  vm.runInContext(between(source, 'const pad =', 'function sampleState()') +
    between(source, 'const nextWeekday =', 'async function extractWithClaude'), ctx);
  const actual = JSON.parse(vm.runInContext(`JSON.stringify(extractByKeywords("Sam: I'll send the brief by next Thursday.\\nMaya: We decided to ship tomorrow.", '2026-11-06', 'Maya'))`, ctx));
  assert.equal(actual.items[0].due, '2026-11-19');
  assert.equal(actual.items[1].due, null);
});

