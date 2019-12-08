import { IPosition } from "../lib/exchange.js";

export interface IGrid {
  column: number;
  line: number;
  width: number;
}

export default class Grid {
  public readonly width: number;
  public readonly svg: SVGSVGElement;
  protected _grid: SVGRectElement[][];

  public get column(): number {
    return this._grid.length;
  }

  public get line(): number {
    return this._grid[0].length;
  }

  constructor({ column, line, width }: IGrid) {
    this.svg = createSvgElement("svg");
    this.width = width;
    this._grid = [];
    this.createGrid(column, line);
  }

  /**
   * getRect
   */
  public getRect(x: number, y: number) {
    if (x >= this.column || x < 0) {
      return undefined;
    }
    if (y >= this.line || y < 0) {
      return undefined;
    }
    return this._grid[x][y];
  }

  /**
   * setDimension
   */
  public setDimension(values: Partial<Omit<IGrid, "width">>) {
    const widthStr = `${this.width}`;
    const { column, line } = this.populateGridValues(values);
    this.svg.setAttribute("width", `${column * this.width}`);
    this.svg.setAttribute("height", `${line * this.width}`);
    if (column > this.column) {
      for (let x = this.column; x < column; x++) {
        this._grid[x] = [];
        for (let y = 0; y < this.line; y++) {
          const g = createSvgElement("g");
          const rect = createSvgRect(x * this.width, y * this.width);
          g.setAttribute("width", widthStr);
          g.setAttribute("height", widthStr);
          g.appendChild(rect);
          this._grid[x][y] = rect;
          this.svg.appendChild(g);
        }
      }
    } else if (column < this.column) {
      const lists = this._grid.splice(column, this.column - column);
      for (const l of lists) {
        for (const rect of l) {
          this.svg.removeChild(rect.parentElement);
        }
      }
    }
    if (line > this.line) {
      for (let y = this.line; y < line; y++) {
        for (let x = 0; x < this.column; x++) {
          const g = createSvgElement("g");
          const rect = createSvgRect(x * this.width, y * this.width);
          g.setAttribute("width", widthStr);
          g.setAttribute("height", widthStr);
          g.appendChild(rect);
          this._grid[x][y] = rect;
          this.svg.appendChild(g);
        }
      }
    } else if (line < this.line) {
      for (let x = 0; x < this.column; x++) {
        const list = this._grid[x].splice(line, this.line - line);
        for (const rect of list) {
          this.svg.removeChild(rect.parentElement);
        }
      }
    }
  }

  /**
   * updateRect
   */
  public updateRect({ x, y, evolvables }: IPosition) {
    const widthStr = `${this.width}`;
    const rect = this.getRect(x, y);
    const g = rect.parentElement;
    while (g.hasChildNodes()) {
      g.removeChild(g.lastChild);
    }
    g.classList.remove("fill-white", "fill-red");
    g.appendChild(rect);
    for (const evoluable of evolvables) {
      if (evoluable === "ant-farm") {
        g.classList.add("fill-red");
        continue;
      }
      const image = createSvgElement("image");
      image.setAttribute("href", `/images/${evoluable}.svg`);
      image.setAttribute("x", `${x * this.width}`);
      image.setAttribute("y", `${y * this.width}`);
      image.setAttribute("height", widthStr);
      image.setAttribute("width", widthStr);
      g.appendChild(image);
    }
  }

  protected createGrid(column: number, line: number) {
    const widthStr = `${this.width}`;
    this.svg.setAttribute("width", `${column * this.width}`);
    this.svg.setAttribute("height", `${line * this.width}`);
    for (let x = 0; x < column; x++) {
      this._grid[x] = [];
      for (let y = 0; y < line; y++) {
        const g = createSvgElement("g");
        const rect = createSvgRect(x * this.width, y * this.width);
        g.appendChild(rect);
        this._grid[x][y] = rect;
        this.svg.appendChild(g);
      }
    }
  }

  protected populateGridValues({ column, line }: Partial<Omit<IGrid, "width">>): Omit<IGrid, "width"> {
    return {
      column: column || this.column,
      line: line || this.line,
    };
  }
}

function createSvgElement<K extends keyof SVGElementTagNameMap>(qualifiedName: K): SVGElementTagNameMap[K] {
  return document.createElementNS("http://www.w3.org/2000/svg", qualifiedName);
}

function createSvgRect(x: number, y: number): SVGRectElement {
  const rect = createSvgElement("rect");
  rect.setAttribute("x", `${x}`);
  rect.setAttribute("y", `${y}`);
  return rect;
}
