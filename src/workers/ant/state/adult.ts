import { strState } from "./state.js";
import Ant from "../ant.js";
import Dead from "./dead.js";
import StateEat from "./state-eat.js";

export default class Adult extends StateEat {

  constructor(timestamp: number, ant: Ant) {
    super(timestamp, ant.adultAge, { mg: ant.adultHasToEat, ms: ant.msStarve });
  }

  public nextState(timestamp: number, ant: Ant): void {
    this.eat(timestamp, ant);
    if (timestamp >= this._msStarve || timestamp >= this.ms) {
      ant.state = new Dead(timestamp);
    }
  }

  public toString(): strState {
    return "adult";
  }
}
