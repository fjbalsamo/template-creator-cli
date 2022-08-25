#!/usr/bin/env node
import { exit } from "process";
import { CLI } from "./cli";
import { ShellScript } from "./shell";
import { NodePlop } from "./plop";
import os from "os";

(async () => {
  console.log({ ...CLI });
  if (!ShellScript.checkGit()) {
    console.log("instale git");
    exit(1);
  }

  const destinyFolder = `${os.homedir()}/beerJS-template`;

  const clone = await ShellScript.clone({
    gitUrl: CLI.gitUrl,
    destinyFolder,
  });

  await ShellScript.checkAppPath({ appPath: CLI.outputPath });

  await ShellScript.npmi({ destinyFolder });

  await NodePlop.prompts({ destinyFolder, name: "template" });

  await ShellScript.cpApp({ appPath: CLI.outputPath, destinyFolder });

  await ShellScript.clear({ destinyFolder });

  await ShellScript.openCode({ appPath: CLI.outputPath });
})();
