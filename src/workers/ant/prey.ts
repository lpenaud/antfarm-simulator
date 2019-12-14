import { randNumber } from "../tools/random.js";

export default class Prey {
  // mg
  public readonly weight: number;

  constructor() {
    this.weight = randNumber({ min: 1.5, max: 9 });
  }
}
