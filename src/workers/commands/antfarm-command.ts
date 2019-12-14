import { ICommand } from "./commander.js";
import Position from "../world/position.js";
import { AntFarm } from "../ant/antfarm.js";

export default class AntFarmCommand implements ICommand {
  public readonly antFarm: AntFarm;
  public readonly position: Position;

  constructor(position: Position, antFarm: AntFarm) {
    this.position = position;
    this.antFarm = antFarm;
  }

  public run(): void {
    this.position.arrive(this.antFarm);
  }
}
