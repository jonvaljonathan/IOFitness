#!/usr/bin/env node
/**
 * Learn article grader — product voice + actor checks.
 *
 * Surface AI-tell lint lives in lint-copy.mjs. This grader catches deeper fails:
 * teaching the reader to be the programmer when the product owns the job,
 * DIY "selection stack" theater, and system_capability pieces that never sell
 * what the app actually does.
 *
 * Exit 1 if any article scores below PASS_SCORE or any hard-fail flag trips.
 */
import { createRequire } from "node:module";
import { pathToFileURL } from "node:url";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const PASS_SCORE = 70;
const LETTER = (n) =>
  n >= 90 ? "A" : n >= 80 ? "B" : n >= 70 ? "C" : n >= 60 ? "D" : "F";

/** @typedef {{ type: string, text?: string, items?: string[], title?: string, body?: string[] }} Block */
/** @typedef {{ slug: string, title: string, description: string, job?: string, body: Block[] }} Article */

function flatten(article) {
  const chunks = [article.title, article.description];
  for (const b of article.body) {
    if (b.text) chunks.push(b.text);
    if (b.title) chunks.push(b.title);
    if (b.items) chunks.push(...b.items);
    if (b.body) chunks.push(...b.body);
  }
  return chunks.join("\n");
}

function headings(article) {
  return article.body.filter((b) => b.type === "h2" || b.type === "h3").map((b) => b.text ?? "");
}

function countMatches(text, re) {
  return [...text.matchAll(re)].length;
}

/**
 * @param {Article} article
 */
function gradeArticle(article) {
  const text = flatten(article);
  const heads = headings(article);
  const job = article.job ?? "reader_decision";
  const flags = [];
  const dims = {};

  // --- Dimension: actor (who does the choosing?) ---
  const diyImperatives = countMatches(
    text,
    /\b(Choose in this order|Do not reverse it|Use this selection stack|you pick the lift|Only after you name the job do you pick|Pick the hardest honest lifts|break it into jobs for the week)\b/gi,
  );
  const diyHeadings = heads.filter((h) =>
    /selection stack|then pick tools|use this|choose in this order|how .+ should choose/i.test(h),
  );
  const systemActor = countMatches(
    text,
    /\b(IOFitness (picks|chooses|selects|builds|fills|shapes)|the (plan|app|system) (picks|chooses|selects|fills|builds|shapes)|we (pick|choose|select|build|fill) (the|your|each)|you set the goal\.?\s+IOFitness picks|you set the goal\.?\s+The app picks)\b/gi,
  );

  let actorScore = 100;
  if (job === "system_capability") {
    if (diyHeadings.length) {
      actorScore -= 35 * diyHeadings.length;
      flags.push({
        code: "diy_heading",
        detail: `system_capability article teaches DIY via headings: ${diyHeadings.map((h) => `"${h}"`).join(", ")}`,
      });
    }
    if (diyImperatives >= 2) {
      actorScore -= 30;
      flags.push({
        code: "diy_imperatives",
        detail: `Reader treated as the exercise programmer (${diyImperatives} DIY imperatives). Goal sets the demand; the app picks.`,
      });
    } else if (diyImperatives === 1) {
      actorScore -= 15;
      flags.push({ code: "diy_imperatives", detail: "At least one DIY programming imperative." });
    }
    if (systemActor === 0) {
      actorScore -= 25;
      flags.push({
        code: "missing_system_actor",
        detail: "Never says the plan/app/IOFitness does the choosing.",
      });
    }
  } else {
    // Soft check: still punish selection-stack theater in decision articles
    if (diyHeadings.some((h) => /selection stack/i.test(h))) {
      actorScore -= 20;
      flags.push({ code: "diy_heading", detail: `DIY framework heading in reader_decision piece: ${diyHeadings.join(", ")}` });
    }
  }
  dims.actor = Math.max(0, Math.min(100, actorScore));

  // --- Dimension: process theater ---
  let processScore = 100;
  if (/selection stack/i.test(text)) {
    processScore -= 40;
    flags.push({
      code: "selection_stack",
      detail: '"Selection stack" is product-internal process theater sold as a reader checklist.',
    });
  }
  if (/How IOFitness should choose/i.test(text)) {
    processScore -= 25;
    flags.push({
      code: "hedged_product",
      detail: '"How IOFitness should choose" hedges. Say how it chooses, or what it is built to do.',
    });
  }
  // Numbered outcome/job/equipment stack sold to reader
  if (
    /Outcome:\s*what do you want/i.test(text) &&
    /Job:\s*what quality/i.test(text) &&
    /Equipment:\s*what can you/i.test(text)
  ) {
    processScore -= 35;
    flags.push({
      code: "diy_framework_ol",
      detail: "Numbered Outcome → Job → Equipment stack teaches the reader to run the product's selection logic.",
    });
  }
  dims.process_theater = Math.max(0, Math.min(100, processScore));

  // --- Dimension: product value (system_capability only) ---
  let valueScore = 100;
  if (job === "system_capability") {
    const hasHardProblem = /confus|hard to|most apps|template|shuffle|menu|checkbox|one.?shot/i.test(text);
    const hasCatalogDepth =
      /\b(exercise bank|exercises?|library)\b/i.test(text) &&
      /\b(sport|senior|injur|athlet|recover|goal)/i.test(text);
    const hasSaid =
      /\bSAID\b/.test(text) ||
      /specific adaptation(s)? to (the )?imposed demand/i.test(text) ||
      /you get better at what you (practice|train)/i.test(text);
    const hasDayShaping = /\b(shape|fill|build)s? (the )?(day|session|week|plan)/i.test(text);

    if (!hasHardProblem) {
      valueScore -= 20;
      flags.push({ code: "weak_problem", detail: "Does not make exercise-for-goal matching feel hard/confusing before selling the system." });
    }
    if (!hasCatalogDepth) {
      valueScore -= 25;
      flags.push({
        code: "weak_catalog_story",
        detail: "Missing the value story: deep exercise bank shaped by real goals (sport, seniors, injury, etc.), not a DIY checklist.",
      });
    }
    if (!hasDayShaping) {
      valueScore -= 15;
      flags.push({ code: "weak_day_shaping", detail: "Does not say the system shapes days/sessions from those goals." });
    }
    // SAID is preferred for exercise-selection articles, not mandatory for every system piece
    if (article.slug.includes("exercises-for-your-goals") && !hasSaid) {
      valueScore -= 15;
      flags.push({
        code: "missing_said",
        detail: "Exercise-selection explainer should teach SAID in plain language (you adapt to what you train).",
      });
    }
  }
  dims.product_value = Math.max(0, Math.min(100, valueScore));

  // --- Dimension: AI lecture residue (beyond em dashes) ---
  let lectureScore = 100;
  if (/^Short version:/m.test(text) || /callout[\s\S]{0,40}Short version:/i.test(JSON.stringify(article.body))) {
    // callouts often start with Short version — mild for now, heavier if stacked with DIY
    if (job === "system_capability" && diyImperatives >= 1) {
      lectureScore -= 10;
      flags.push({ code: "short_version_diy", detail: "Callout still instructs the reader to pick lifts like a programmer." });
    }
  }
  const parallelNotX = countMatches(text, /\b(You do not want|Those are goals\.|Exercises are just tools)\b/g);
  if (parallelNotX >= 3) {
    lectureScore -= 10;
    flags.push({ code: "parallel_lecture", detail: "Opening stacks thesis-pair cadence." });
  }
  if (/under the hood/i.test(text)) {
    lectureScore -= 15;
    flags.push({ code: "under_the_hood", detail: '"Under the hood" is stock AI/product-blog diction.' });
  }
  if (job === "system_capability") {
    const notStack = countMatches(text, /^Not a /gm) + countMatches(text, /\nNot a /g);
    // Count "Not a" bullets in flattened text
    const notBullets = countMatches(text, /\bNot a (one-time|endless|algorithm|body-part)/gi);
    if (notBullets >= 3) {
      lectureScore -= 15;
      flags.push({
        code: "not_a_stack",
        detail: 'Stacked "Not a…" bullets read like manifesto AI, not a coach.',
      });
    }
    // system pieces should say the pairing out loud at least once
    if (!/you set the goal/i.test(text) || !/\b(IOFitness picks|the app picks|IOFitness chooses|the app chooses)\b/i.test(text)) {
      lectureScore -= 20;
      flags.push({
        code: "missing_goal_app_pair",
        detail: 'Missing the plain pair: "you set the goal" + "the app/IOFitness picks/chooses".',
      });
    }
  }
  dims.lecture = Math.max(0, Math.min(100, lectureScore));

  // Weighted total
  const weights =
    job === "system_capability"
      ? { actor: 0.35, process_theater: 0.25, product_value: 0.3, lecture: 0.1 }
      : { actor: 0.25, process_theater: 0.25, product_value: 0.2, lecture: 0.3 };

  const score = Math.round(
    dims.actor * weights.actor +
      dims.process_theater * weights.process_theater +
      dims.product_value * weights.product_value +
      dims.lecture * weights.lecture,
  );

  const hardFail = flags.some((f) =>
    ["diy_heading", "selection_stack", "diy_framework_ol", "diy_imperatives"].includes(f.code),
  );

  return {
    slug: article.slug,
    title: article.title,
    job,
    score,
    letter: LETTER(score),
    dims,
    flags,
    hardFail: job === "system_capability" && hardFail,
  };
}

async function loadArticles() {
  // Prefer compiled-free dynamic import of the TS module via tsx when available.
  const learnPath = path.join(ROOT, "content/learn.ts");
  try {
    const mod = await import(pathToFileURL(learnPath).href);
    return mod.learnArticles ?? mod.getLearnArticles?.() ?? [];
  } catch {
    const require = createRequire(import.meta.url);
    // Fallback: spawn hint
    throw new Error(
      `Could not import ${learnPath}. Run via: npx tsx scripts/grade-learn-articles.mjs\n${String(arguments[0] ?? "")}`,
    );
  }
}

async function main() {
  let articles;
  try {
    articles = await loadArticles();
  } catch (err) {
    // Re-run path: this file is meant to be executed with tsx
    console.error(String(err.message || err));
    process.exit(2);
  }

  if (!articles.length) {
    console.error("No Learn articles loaded.");
    process.exit(2);
  }

  const results = articles.map(gradeArticle);
  const failing = results.filter((r) => r.score < PASS_SCORE || r.hardFail);

  // Stable print: worst first
  results.sort((a, b) => a.score - b.score);

  console.log(`Learn grader · pass ≥ ${PASS_SCORE} · ${results.length} articles\n`);
  for (const r of results) {
    const mark = r.score < PASS_SCORE || r.hardFail ? "FAIL" : "ok  ";
    console.log(
      `${mark}  ${r.letter} ${String(r.score).padStart(3)}  [${r.job}]  ${r.slug}`,
    );
    for (const [k, v] of Object.entries(r.dims)) {
      console.log(`         ${k}: ${v}`);
    }
    for (const f of r.flags) {
      console.log(`         ! ${f.code}: ${f.detail}`);
    }
    console.log("");
  }

  if (failing.length) {
    console.error(
      `Failed ${failing.length} article(s): ${failing.map((f) => `${f.slug} (${f.letter})`).join(", ")}`,
    );
    process.exit(1);
  }
  console.log("All articles passed.");
}

main();
