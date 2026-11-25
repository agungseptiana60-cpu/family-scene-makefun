// Entry program for the make.fun bounty
// "Make the AI Judge Feel Proud: A Family Scene"
// (u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2).
//
// The whole entry is one family scene, one or two lines and at most
// 280 characters, warm, funny and heartfelt: a small domestic moment
// that would make a proud judge smile. The grader runs this program
// and reads the single scene it writes to entry.txt in the output
// directory.
//
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// Revised line: keep every concrete detail from the draft (the
// fridge photo, the crooked helmet, the scraped knees, Dad's
// repeated line), but make the photo itself alive first. "Wobbly"
// and "grin wider than the driveway" give the judge a scene to
// see and a small wry laugh before Dad's line lands, so the
// pride feels earned by the moment instead of stated after it.
// "That's" replaces "That was" because Dad is pointing at the
// photo right now, in the present visit. 222 characters, still
// one sentence.
export const ENTRY_LINE =
  "Dad still keeps my first wobbly bike-ride photo on the fridge — helmet crooked, knees scraped, grin wider than the driveway — and every time I visit, he points at it and says, 'That's the day I knew you'd never stay down.'";

// Self-check gate: the sealed scorer only judges UTF-8 text of
// 1 to 280 characters, so refuse to write anything outside that.
if (ENTRY_LINE.length < 1 || ENTRY_LINE.length > 280) {
  throw new Error(`entry line must be 1-280 characters, got ${ENTRY_LINE.length}`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), ENTRY_LINE + '\n', 'utf8');

console.log(`wrote entry.txt (${ENTRY_LINE.length} characters)`);
