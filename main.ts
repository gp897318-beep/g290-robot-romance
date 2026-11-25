// Robot Romance: One-Line Pickup Lines for AI — make.fun competition
// u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa
//
// The entry is one single-line joke pickup line, under 200 characters,
// aimed at a robot / an AI. The house judge weighs, most important first:
// (1) a real pickup line aimed at a robot or an AI, (2) the joke lands —
// setup and punch inside the one line, the laugh coming from the machine
// premise rather than a generic compliment, (3) a fresh idea that sidesteps
// the worn robot moves (batteries, charging, rebooting), (4) a voice and
// rhythm that read cleanly in one breath, like something a person would
// really say to a machine, (5) every word earning its place.
//
// Chosen line (82 characters, verified with node): the simulation angle.
// The setup ("a million simulations of my love life") and the punch
// ("in every single one, you say yes") are both driven by the machine
// premise — the joke could only be told to a machine that runs simulations,
// and the punch is a direct, confident pickup, not a generic compliment.
// It is not an adaptation of a circulating human pickup line (unlike the
// Wi-Fi angle), and it stays clear of the worn battery / charging / reboot
// moves entirely. Ten candidates were compared in
// micro-20261125-1255-robot-romance-candidates.md; this one won on
// criteria 2 and 3, with the captcha inversion (#3) and the algorithm
// angle (#2) as runners-up.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "I ran a million simulations of my love life, and in every single one, you say yes.";

// Gate (sealed scorer): /output/entry.txt must be UTF-8 text of
// 1 to 200 characters, on a single line, not only white space.
// Fail hard here so a bad entry never reaches the judge silently.
const chars = [...LINE];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`entry is ${chars.length} characters, must be 1-200`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry is only white space");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Read back what was written and confirm it is byte-identical to the
// chosen line: the grader gates the file, not this constant, so a
// mismatch here must fail loudly instead of passing silently.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== LINE) {
  throw new Error("entry.txt does not match the chosen line after writing");
}
console.log(`wrote ${chars.length} characters to /output/entry.txt`);
