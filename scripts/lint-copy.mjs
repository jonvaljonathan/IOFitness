#!/usr/bin/env node
/**
 * Fail on AI-writing tells in marketing copy (content/ + site title strings).
 * Based on seo-audit/references/ai-writing-detection.md — em dash is primary.
 *
 * Citation lines (published paper titles) may keep an em dash; allowlist by
 * matching "citation:" nearby is too fragile, so we allow files listed below
 * only for lines that look like bibliographic citations.
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const SCAN_DIRS = [path.join(ROOT, "content"), path.join(ROOT, "lib")];
const SCAN_FILES = [
  path.join(ROOT, "app/layout.tsx"),
  path.join(ROOT, "app/learn/page.tsx"),
  path.join(ROOT, "app/learn/[slug]/page.tsx"),
];

const EM_DASH = /[—–]/;
const BANNED_PHRASE =
  /being designed|intended model|In today's|At its core|That being said|Let's delve|It's worth noting|fitness journey/i;

const issues = [];

function isCitationLine(line) {
  return (
    /Scand J Med Sci Sports|J Strength Cond Res|Eur J Soc Psychol|doi\.org|et al\./i.test(
      line,
    ) || /^\s*citation:\s*"/.test(line)
  );
}

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else if (/\.(ts|tsx|md)$/.test(entry.name)) out.push(full);
  }
  return out;
}

const files = [
  ...SCAN_DIRS.flatMap(walk),
  ...SCAN_FILES.filter((f) => fs.existsSync(f)),
];

for (const file of files) {
  const rel = path.relative(ROOT, file);
  const lines = fs.readFileSync(file, "utf8").split("\n");
  lines.forEach((line, i) => {
    if (isCitationLine(line)) return;
    if (EM_DASH.test(line)) {
      issues.push(`${rel}:${i + 1}: em/en dash — ${line.trim().slice(0, 120)}`);
    }
    if (BANNED_PHRASE.test(line)) {
      issues.push(
        `${rel}:${i + 1}: banned AI/soft-close phrase — ${line.trim().slice(0, 120)}`,
      );
    }
  });
}

if (issues.length) {
  console.error(`lint:copy failed (${issues.length} issue${issues.length === 1 ? "" : "s"}):\n`);
  for (const issue of issues) console.error(`  ${issue}`);
  process.exit(1);
}

console.log(`lint:copy ok (${files.length} files)`);
