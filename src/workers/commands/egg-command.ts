import { ICommand } from "./commander.js";
import Position from "../world/position.js";
import { AntFarm } from "../ant/antfarm.js";
import Ant from "../ant/ant.js";
import Egg from "../ant/state/egg.js";

export default class EggCommand implements ICommand {
  protected _timestamp: number;
  protected _position: Position;
  protected _antFarm: AntFarm;

  constructor(timestamp: number, position: Position, antFarm: AntFarm) {
    this._timestamp = timestamp;
    this._position = position;
    this._antFarm = antFarm;
  }

  public run(): void {
    const antEgg = new Ant();
    antEgg.state = new Egg(this._timestamp, antEgg);
    antEgg.antFarm = this._antFarm;
    this._position.arrive(antEgg);
  }

}
