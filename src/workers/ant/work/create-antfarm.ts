import Work from "./work.js";
import World from "../../world/world.js";
import Position from "../../world/position.js";
import Queen from "../queen.js";
import AntFarmCommand from "../../commands/antfarm-command.js";

export default class CreateAntFarm extends Work {

  public work(timestamp: number, world: World, position: Position, queen: Queen): void {
    position.addCommands(new AntFarmCommand(timestamp, position, queen));
  }
}
