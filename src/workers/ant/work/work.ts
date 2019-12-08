import World from "../../world/world.js";
import Position from "../../world/position.js";
import Ant from "../ant.js";

export default abstract class Work {
  /**
   * work
   */
  public abstract work(timestamp: number, world: World, position: Position, ant: Ant): void;
}
