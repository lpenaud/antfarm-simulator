import World from "./world.js";
import Commander from "../commands/commander.js";

export interface IEvolvable {
  evolve(timestamp: number, world: World, position: Position): void;
}

export interface IPosition {
  north: Position;
  east: Position;
  south: Position;
  west: Position;
}

export default class Position extends Commander implements IPosition {
  public north: Position;
  public east: Position;
  public south: Position;
  public west: Position;
  protected _evolvable: Set<IEvolvable> = new Set();
  protected _changed: boolean = false;

  public get changed(): boolean {
    return this._changed;
  }

  public get evolvables(): IEvolvable[] {
    return new Array(...this._evolvable);
  }

  /**
   * move
   */
  public arrive(movable: IEvolvable) {
    this._evolvable.add(movable);
    this._changed = true;
  }

  /**
   * leave
   */
  public leave(movable: IEvolvable) {
    this._evolvable.delete(movable);
    this._changed = true;
  }

  /**
   * evolve
   */
  public evolve(timestamp: number, world: World): boolean {
    this._changed = false;
    for (const movable of this._evolvable) {
      movable.evolve(timestamp, world, this);
    }
    return this._commands.length > 0;
  }
}
