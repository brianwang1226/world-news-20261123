import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// Copy the newspaper front page that sums up Monday 23 November 2026
// (COP31 ends with no deal; Ukrainian drone hits a Russian warship in
// Benghazi; Russian strikes kill 15 near Kyiv; Nvidia soars as Huang
// returns as CEO; BepiColombo reaches Mercury; AI helps prove the
// Riemann hypothesis) to the output the contest reads.
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(
  new URL("./entry.png", import.meta.url),
  join(outDir, "entry.png"),
);
