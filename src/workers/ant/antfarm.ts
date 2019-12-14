import Position, { IEvolvable } from "../world/position.js";
import World from "../world/world.js";
import Prey from "./prey.js";

export class AntFarm implements IEvolvable {
  public readonly birth: number;

  constructor(timestamp: number) {
    this.birth = timestamp;
  }

  public evolve(timestamp: number, world: World, position: Position): void {
    // TODO: Implement this method
  }

  public getFood() {
    return new Prey();
  }

  public hasFood() {
    return true;
  }

  /**
   * toString
   */
  public toString(): string {
    return "ant-farm";
  }
}
