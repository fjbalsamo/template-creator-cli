import shell from "shelljs";

export class ShellScript {
  public static checkGit() {
    return shell.which("git") ? true : false;
  }

  public static async clone({
    gitUrl,
    destinyFolder,
  }: {
    gitUrl: string;
    destinyFolder: string;
  }) {
    const { code } = await shell.exec(`git clone ${gitUrl} ${destinyFolder}`);
    return code === 0;
  }

  public static async npmi({ destinyFolder }: { destinyFolder: string }) {
    const npmi = await shell.exec(`cd ${destinyFolder} && npm i`);

    return npmi.code === 0;
  }

  public static async runPlop({ destinyFolder }: { destinyFolder: string }) {
    const npms = await shell.exec(`cd ${destinyFolder} && npm start`);

    return npms.code === 0;
  }

  public static async cpApp({
    appPath,
    destinyFolder,
  }: {
    destinyFolder: string;
    appPath: string;
  }) {
    const cp = await shell.exec(`cp -r ${destinyFolder}/dist/* ${appPath}`);
    return cp.code === 0;
  }

  public static async clear({ destinyFolder }: { destinyFolder: string }) {
    const rm = await shell.rm("-rf", `${destinyFolder}`);
    return rm.code === 0;
  }

  public static async openCode({
    appPath,
    ide = "code",
  }: {
    appPath: string;
    ide?: "code" | "atom";
  }) {
    await shell.exec(`${ide} ${appPath}`);
  }
}
