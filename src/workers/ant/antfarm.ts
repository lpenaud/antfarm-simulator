import Position, { IEvolvable } from "../world/position.js";
import World from "../world/world.js";

export class AntFarm implements IEvolvable {
  public readonly birth: number;
  // protected stock

  constructor(timestamp: number) {
    this.birth = timestamp;
  }

  public evolve(timestamp: number, world: World, position: Position): void {
    // TODO: Implement this method
  }

  /**
   * toString
   */
  public toString(): string {
    return "ant-farm";
  }
}
