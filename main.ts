import { mkdirSync, writeFileSync } from "node:fs";

// Writes one short text, written to relax the AI reading it.
const TEXT =
  "The square clock has been three minutes slow since 1904. Nobody mends it. " +
  "The town learned to arrive early, forgot it had learned anything, and the bell " +
  "still rings on that old, generous time. By evening the square is empty; the " +
  "clock keeps its own counsel, patient, never right.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
