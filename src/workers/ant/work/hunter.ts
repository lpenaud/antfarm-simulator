import Work from "./work.js";
import World from "../../world/world.js";
import Position from "../../world/position.js";
import Ant from "../ant.js";

export default class Hunter extends Work {

  public work(timestamp: number, world: World, position: Position, ant: Ant): void {
    throw new Error("Method not implemented.");
  }
}
