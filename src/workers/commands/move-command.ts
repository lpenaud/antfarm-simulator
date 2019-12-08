import Position from "../world/position.js";
import { ICommand } from "./commander.js";
import Ant from "../ant/ant.js";

export default class MoveCommand implements ICommand {
  protected _from: Position;
  protected _to: Position;
  protected _ant: Ant;

  constructor(from: Position, to: Position, ant: Ant) {
    this._ant = ant;
    this._from = from;
    this._to = to;
  }

  public run(): void {
    this._from.leave(this._ant);
    this._to.arrive(this._ant);
  }
}
