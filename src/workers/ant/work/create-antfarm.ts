import Work from "./work.js";
import World from "../../world/world.js";
import Position from "../../world/position.js";
import Queen from "../queen.js";
import AntFarmCommand from "../../commands/antfarm-command.js";
import { AntFarm } from "../antfarm.js";
import CreateEgg from "./create-egg.js";

export default class CreateAntFarm extends Work {

  public work(timestamp: number, world: World, position: Position, queen: Queen): void {
    queen.antFarm = new AntFarm(timestamp);
    queen.work = new CreateEgg();
    position.addCommands(new AntFarmCommand(position, queen.antFarm));
  }
}
