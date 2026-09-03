#!/usr/bin/env node
/**
 * Notify IndexNow when public URLs change.
 *
 * Usage:
 *   node scripts/notify-indexnow.mjs
 *   node scripts/notify-indexnow.mjs https://io.fitness/learn/some-slug
 *
 * With no args, submits every URL currently listed in /sitemap.xml.
 * Only runs against production host; set INDEXNOW_KEY if the key file
 * name differs from the committed public/{key}.txt default.
 */

import { readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const HOST = "io.fitness";
const ENDPOINT = "https://api.indexnow.org/indexnow";
const root = join(dirname(fileURLToPath(import.meta.url)), "..");

function resolveKey() {
  if (process.env.INDEXNOW_KEY?.trim()) {
    return process.env.INDEXNOW_KEY.trim();
  }

  const match = readdirSync(join(root, "public")).find((name) =>
    /^[a-f0-9]{32}\.txt$/i.test(name),
  );

  if (!match) {
    throw new Error("No IndexNow key file found in public/");
  }

  return match.replace(/\.txt$/i, "");
}

async function urlsFromSitemap() {
  const response = await fetch(`https://${HOST}/sitemap.xml`);
  if (!response.ok) {
    throw new Error(`Failed to fetch sitemap: ${response.status}`);
  }
  const xml = await response.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

async function main() {
  const key = resolveKey();
  const keyLocation = `https://${HOST}/${key}.txt`;
  const args = process.argv.slice(2).filter((a) => a.startsWith("http"));
  const urlList = args.length > 0 ? args : await urlsFromSitemap();

  if (urlList.length === 0) {
    console.log("No URLs to submit.");
    return;
  }

  const body = {
    host: HOST,
    key,
    keyLocation,
    urlList,
  };

  const response = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });

  const text = await response.text();
  if (response.status === 200 || response.status === 202) {
    console.log(`IndexNow accepted ${urlList.length} URL(s) (${response.status}).`);
    return;
  }

  console.error(`IndexNow failed: ${response.status} ${text}`);
  process.exitCode = 1;
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
