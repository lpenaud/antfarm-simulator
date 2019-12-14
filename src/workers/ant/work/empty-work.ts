import Work from "./work.js";
import World from "../../world/world.js";
import Position from "../../world/position.js";
import Ant from "../ant.js";

class EmptyWork extends Work {
  public work(timestamp: number, world: World, position: Position, ant: Ant): void {
    // do nothing
  }

}

const EMPTY_WORK = new EmptyWork();

export default EMPTY_WORK;
