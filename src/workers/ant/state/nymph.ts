import State from "./state.js";
import Ant from "../ant.js";
import { randNumber } from "../../tools/random.js";
import Adult from "./adult.js";
import MoveEast from "../work/move-east.js";

export default class Nymph extends State {

  constructor(timestamp: number, ant: Ant) {
    super(timestamp, randNumber(ant.nymphAge));
  }

  public nextState(timestamp: number, ant: Ant): void {
    if (timestamp >= this.ms) {
      console.log("+adulte");
      ant.state = new Adult(timestamp, ant);
      ant.work = new MoveEast();
    }
  }

  public toString(): string {
    return "Nymph";
  }
}
