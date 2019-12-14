import Ant from "../ant.js";
import { randInt, IMinMax } from "../../tools/random.js";

export type strState = "egg" | "larva" | "nymph" | "adult" | "dead";

export default abstract class State {
  public readonly ms: number;

  constructor(timestamp: number, age: IMinMax) {
    this.ms = timestamp + randInt(age);
  }

  public abstract nextState(timestamp: number, ant: Ant): void;
  public abstract toString(): strState;
}
