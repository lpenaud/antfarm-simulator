import State from "./state/state.js";
import Position, { IEvolvable } from "../world/position.js";
import World from "../world/world.js";
import Work from "./work/work.js";
import { AntFarm } from "./antfarm.js";
import { IMinMax } from "../tools/random.js";

export default class Ant implements IEvolvable {
  // In ms
  public readonly eggAge: IMinMax = { min: 2.592E8, max: 2.592E8 };
  public readonly larvaAge: IMinMax = { min: 8.64E8, max: 8.64E8 };
  public readonly nymphAge: IMinMax = { min: 1.4688E9, max: 1.4688E9 };
  public readonly adultAge: IMinMax = { min: 4.7304E10, max: 7.884E10 };
  public readonly msStarve: number = 8.64E7;

  // In mg
  public readonly larvaWeight: IMinMax = { min: 4.5, max: 8 };
  public readonly larvaHasToEat: IMinMax = this.larvaWeight;
  public readonly adultWeight: IMinMax = { min: 1.5, max: 2 };
  public readonly adultHasToEat: IMinMax = { min: this.adultWeight.min * .3, max: this.adultWeight.max * .3 };

  public state: State;
  public work: Work;
  public antFarm: AntFarm;

  public evolve(timestamp: number, world: World, position: Position): void {
    this.work.work(timestamp, world, position, this);
    this.state.nextState(timestamp, this);
  }

  /**
   * toString
   */
  public toString(): string {
    return "ant";
  }
}
