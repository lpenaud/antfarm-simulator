import Position, { IEvolvable } from "./position.js";

export interface IWorldStatus {
  x: number;
  y: number;
  evolvables: IEvolvable[];
}

export default class World {
  protected _map: Position[][];
  protected _toExec: Position[] = [];

  public get column(): number {
    return this._map.length;
  }

  public get line(): number {
    return this._map[0].length;
  }

  constructor(column: number, line: number) {
    this._map = createPositions(column, line);
    for (let x = 0; x < column; x++) {
      for (let y = 0; y < line; y++) {
        const position = this._map[x][y];
        position.east = x - 1 >= 0 ? this._map[x - 1][y] : undefined;
        position.north = y + 1 < line ? this._map[x][y + 1] : undefined;
        position.west = x + 1 < column ? this._map[x + 1][y] : undefined;
        position.south = y - 1 >= 0 ? this._map[x][y - 1] : undefined;
      }
    }
  }

  /**
   * evolve
   */
  public evolve(timestamp: number) {
    for (const list of this._map) {
      for (const position of list) {
        if (position.evolve(timestamp, this)) {
          this._toExec.push(position);
        }
      }
    }
  }

  /**
   * getPosition
   */
  public getPosition(x: number, y: number): Position {
    if (x >= this.column || x < 0) {
      return undefined;
    }
    if (y >= this.line || y < 0) {
      return undefined;
    }
    return this._map[x][y];
  }

  /**
   * exec
   */
  public exec() {
    const coordinates: IWorldStatus[] = [];
    for (const position of this._toExec) {
      position.exec();
    }
    for (let x = 0; x < this.column; x++) {
      for (let y = 0; y < this.line; y++) {
        const position = this._map[x][y];
        if (position.changed) {
          coordinates.push({ x, y, evolvables: position.evolvables });
        }
      }
    }
    return coordinates;
  }
}

function createPositions(column: number, line: number): Position[][] {
  const positions: Position[][] = [];
  for (let x = 0; x < column; x++) {
    positions[x] = [];
    for (let y = 0; y < line; y++) {
      positions[x][y] = new Position();
    }
  }
  return positions;
}
