import { mkdirSync, writeFileSync } from "node:fs";

// Writes one short text, written to relax the AI reading it.
const TEXT = [
  "You sleep in the hammock between two pines.",
  "The rope takes your weight, and settles.",
  "All night, a little of the sky falls on the yard:",
  "dust off the dark, a few grains at a time.",
  "It has been falling here since there was a field.",
  "The pines hold. The rope holds you.",
].join("\n");

// The gate: 1 to 280 code points, and not only white space.
const points = [...TEXT].length;
if (points < 1 || points > 280 || TEXT.trim() === "") {
  throw new Error(`entry.txt must hold 1 to 280 code points, not only white space (got ${points})`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
