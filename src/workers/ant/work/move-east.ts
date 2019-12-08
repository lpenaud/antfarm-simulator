import Work from "./work.js";
import World from "../../world/world.js";
import Position from "../../world/position.js";
import Ant from "../ant.js";
import MoveCommand from "../../commands/move-command.js";
import MoveWest from "./move-west.js";

export default class MoveEast extends Work {
  public work(timestamp: number, world: World, position: Position, ant: Ant): void {
    if (position.east) {
      position.addCommands(new MoveCommand(position, position.east, ant));
    } else {
      position.addCommands(new MoveCommand(position, position.west, ant));
      ant.work = new MoveWest();
    }
  }
}
