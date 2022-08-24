import { parse } from "ts-command-line-args";

export const CLI = parse<{ gitUrl: string; outputPath: string }>({
  gitUrl: {
    type: String,
    alias: "g",
    description: "template's repository url",
  },
  outputPath: {
    type: String,
    alias: "o",
    description: "output path for yuo app",
  },
});
