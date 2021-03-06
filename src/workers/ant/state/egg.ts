import State, { strState } from "./state.js";
import Ant from "../ant.js";
import Larva from "./larva.js";

export default class Egg extends State {

  constructor(timestamp: number, ant: Ant) {
    super(timestamp, ant.eggAge);
  }

  public nextState(timestamp: number, ant: Ant): void {
    if (timestamp >= this.ms) {
      ant.state = new Larva(timestamp, ant);
    }
  }

  public toString(): strState {
    return "egg";
  }
}
