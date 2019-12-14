import State, { strState } from "./state.js";
import Ant from "../ant.js";

export default class Dead extends State {

  constructor(timestamp: number) {
    super(timestamp, { min: 0, max: 0 });
  }

  public nextState(timestamp: number, ant: Ant): void {
    // There are nothing after dead
  }

  public toString(): strState {
    return "dead";
  }
}
