export default class Setup {
  public readonly form: HTMLFormElement;
  public readonly inputColumn: HTMLInputElement;
  public readonly inputLine: HTMLInputElement;
  public readonly inputQueen: HTMLInputElement;

  public get column(): number {
    return parseInt(this.inputColumn.value, 10);
  }

  public set column(v: number) {
    this.inputColumn.value = `${v}`;
  }

  public get line(): number {
    return parseInt(this.inputLine.value, 10);
  }

  public set line(v: number) {
    this.inputLine.value = `${v}`;
  }

  public get queen(): number {
    return parseInt(this.inputQueen.value, 10);
  }

  public set queen(v: number) {
    this.inputQueen.value = `${v}`;
  }

  constructor({ column, line, queen }: { column: number, line: number, queen: number }) {
    this.form = document.getElementById("setup") as HTMLFormElement;
    this.inputColumn = document.getElementById("grid-column") as HTMLInputElement;
    this.column = column;
    this.inputLine = document.getElementById("grid-line") as HTMLInputElement;
    this.line = line;
    this.inputQueen = document.getElementById("nb-queen") as HTMLInputElement;
    this.queen = queen;
  }
}
