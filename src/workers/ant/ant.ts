import State from "./state/state.js";
import Position, { IEvolvable } from "../world/position.js";
import World from "../world/world.js";
import Work from "./work/work.js";
import { AntFarm } from "./antfarm.js";

export interface IAge {
  min: number;
  max: number;
}

export default class Ant implements IEvolvable {
  public readonly eggAge: IAge = { min: 2.592E8, max: 2.592E8 };
  public readonly larvaAge: IAge = { min: 8.64E8, max: 8.64E8 };
  public readonly nymphAge: IAge = { min: 1.4688E9, max: 1.4688E9 };
  public readonly adultAge: IAge = { min: 4.7304E10, max: 7.884E10 };
  public state: State;
  public work: Work;
  public antFarm: AntFarm;

  public evolve(timestamp: number, world: World, position: Position): void {
    this.state.nextState(timestamp, this);
    if (this.work) {
      this.work.work(timestamp, world, position, this);
    }
  }

  /**
   * toString
   */
  public toString(): string {
    return "ant";
  }
}
