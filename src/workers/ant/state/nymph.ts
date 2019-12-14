import State, { strState } from "./state.js";
import Ant from "../ant.js";
import Adult from "./adult.js";
import MoveEast from "../work/move-east.js";

export default class Nymph extends State {

  constructor(timestamp: number, ant: Ant) {
    super(timestamp, ant.nymphAge);
  }

  public nextState(timestamp: number, ant: Ant): void {
    if (timestamp >= this.ms) {
      ant.state = new Adult(timestamp, ant);
      ant.work = new MoveEast();
    }
  }

  public toString(): strState {
    return "nymph";
  }
}
