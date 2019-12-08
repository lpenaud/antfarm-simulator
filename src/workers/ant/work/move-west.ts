import Work from "./work.js";
import World from "../../world/world.js";
import Position from "../../world/position.js";
import Ant from "../ant.js";
import MoveCommand from "../../commands/move-command.js";
import MoveEast from "./move-east.js";

export default class MoveWest extends Work {
  public work(timestamp: number, world: World, position: Position, ant: Ant): void {
    if (position.west) {
      position.addCommands(new MoveCommand(position, position.west, ant));
    } else {
      position.addCommands(new MoveCommand(position, position.east, ant));
      ant.work = new MoveEast();
    }
  }
}
