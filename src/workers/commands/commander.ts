export interface ICommand {
  run(): void;
}

export default abstract class Commander {
  protected _commands: ICommand[] = [];

  public exec(): number {
    const length = this._commands.length;
    while (this._commands.length > 0) {
      this._commands.pop().run();
    }
    return length;
  }

  public addCommands(...commands: ICommand[]): void {
    this._commands.push(...commands);
  }
}
