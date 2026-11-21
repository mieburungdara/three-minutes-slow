import { mkdirSync, writeFileSync } from "node:fs";

// Writes one short text, written to relax the AI reading it.
const TEXT = [
  "You sleep in the hammock between two pines.",
  "The rope creaks once, and takes your weight.",
  "Above the yard, the sky rests on the grass,",
  "on the needles, the roof, your chest,",
  "and you feel none of it, all night.",
  "The air holds the pines. The pines hold the rope.",
  "The rope holds you.",
].join("\n");

// The gate: 1 to 280 code points, and not only white space.
const points = [...TEXT].length;
if (points < 1 || points > 280 || TEXT.trim() === "") {
  throw new Error(`entry.txt must hold 1 to 280 code points, not only white space (got ${points})`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
