import State from "./state.js";
import Ant from "../ant.js";
import { randNumber } from "../../tools/random.js";
import Dead from "./dead.js";

export default class Adult extends State {

  constructor(timestamp: number, ant: Ant) {
    super(timestamp, randNumber(ant.adultAge));
  }

  public nextState(timestamp: number, ant: Ant): void {
    if (timestamp >= this.ms) {
      ant.state = new Dead(timestamp);
    }
  }

  public toString(): string {
    return "Adult";
  }
}
