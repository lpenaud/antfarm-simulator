import State from "./state.js";
import Ant from "../ant.js";
import { randNumber } from "../../tools/random.js";
import Nymph from "./nymph.js";

export default class Larva extends State {

  constructor(timestamp: number, ant: Ant) {
    super(timestamp, randNumber(ant.larvaAge));
  }

  public nextState(timestamp: number, ant: Ant): void {
    if (timestamp >= this.ms) {
      ant.state = new Nymph(timestamp, ant);
    }
  }

  public toString(): string {
    return "Larva";
  }
}
