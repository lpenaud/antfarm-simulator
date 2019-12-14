import { strState } from "./state.js";
import Ant from "../ant.js";
import Nymph from "./nymph.js";
import Dead from "./dead.js";
import StateEat from "./state-eat.js";

export default class Larva extends StateEat {

  constructor(timestamp: number, ant: Ant) {
    super(timestamp, ant.larvaAge, { mg: ant.larvaHasToEat, ms: ant.msStarve });
  }

  public nextState(timestamp: number, ant: Ant): void {
    this.eat(timestamp, ant);
    if (timestamp >= this._msStarve) {
      ant.state = new Dead(timestamp);
      return;
    }
    if (timestamp >= this.ms) {
      ant.state = new Nymph(timestamp, ant);
    }
  }

  public toString(): strState {
    return "larva";
  }
}
