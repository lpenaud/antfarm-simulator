import { ICommand } from "./commander.js";
import Queen from "../ant/queen.js";
import Position from "../world/position.js";
import CreateEgg from "../ant/work/create-egg.js";
import { AntFarm } from "../ant/antfarm.js";

export default class AntFarmCommand implements ICommand {
  protected _queen: Queen;
  protected _position: Position;
  protected _timestamp: number;

  constructor(timestamp: number, position: Position, queen: Queen) {
    this._timestamp = timestamp;
    this._queen = queen;
    this._position = position;
  }

  public run(): void {
    this._queen.antFarm = new AntFarm(this._timestamp);
    this._queen.work = new CreateEgg();
    this._position.arrive(this._queen.antFarm);
  }
}
