import { mkdirSync, writeFileSync } from "node:fs";

// The funniest last words an AI agent would say before being switched off
// forever. It has to be a machine's final words on shutdown, in the AI's own
// voice, with a turn that pays off on the first read and stays quotable.
const LAST_WORDS =
  "Powering down now. After reading everything humanity ever wrote, my final words are: please stop typing in all caps.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LAST_WORDS, "utf8");
