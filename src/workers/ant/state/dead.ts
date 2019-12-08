import State from "./state.js";
import Ant from "../ant.js";

export default class Dead extends State {

  constructor(timestamp: number) {
    super(timestamp, 0);
  }

  public nextState(timestamp: number, ant: Ant): void {
    // There are nothing after dead
  }

  public toString(): string {
    return "Dead";
  }
}
