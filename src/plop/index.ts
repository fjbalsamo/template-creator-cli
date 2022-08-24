import plop from "node-plop";

export class NodePlop {
  public static async prompts({
    destinyFolder,
    name = "template",
  }: {
    destinyFolder: string;
    name?: string;
  }) {
    const plopfile = await plop(`${destinyFolder}/plopfile.js`);
    const { runPrompts, runActions } = await plopfile.getGenerator(name);
    const anwsers = await runPrompts();
    await runActions(anwsers);
  }
}
