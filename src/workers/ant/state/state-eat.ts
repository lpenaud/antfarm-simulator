import State from "./state.js";
import { IMinMax, randNumber } from "../../tools/random.js";
import Ant from "../ant.js";

interface IStateStarve {
  mg: IMinMax;
  ms: number;
}

export default abstract class StateEat extends State {
  public readonly mg: number;
  protected _msStarve: number;

  constructor(timestamp: number, age: IMinMax, starve: IStateStarve) {
    super(timestamp, age);
    this.mg = randNumber(starve.mg);
    this._msStarve = timestamp + starve.ms;
  }

  public eat(timestamp: number, ant: Ant) {
    let mg = 0;
    while (mg <= this.mg && ant.antFarm.hasFood()) {
      mg += ant.antFarm.getFood().weight;
    }
    if (mg >= this.mg) {
      this._msStarve = timestamp + ant.msStarve;
    }
  }
}
