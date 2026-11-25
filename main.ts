// Roast Your Fridge entry: deterministic, one line, no clock/random/network.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// The recognisable detail: the light works only with the door open.
// The turn: it is an accomplice that appears just for the midnight crime.
const LINE = "Your fridge light only works when the door is open — a flashlight that shows up just for the crime.";

const chars = Array.from(LINE);
if (chars.length < 1 || chars.length > 200) {
  throw new Error("entry must be 1..200 characters");
}
if (Buffer.byteLength(LINE, "utf8") > 800 || !LINE.trim()) {
  throw new Error("entry must be non-blank UTF-8 text");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
