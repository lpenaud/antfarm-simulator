import Ant from "../ant.js";

export default abstract class State {
  public readonly ms: number;

  constructor(timestamp: number, ms: number) {
    this.ms = timestamp + ms;
  }

  public abstract nextState(timestamp: number, ant: Ant): void;
  public abstract toString(): string;
}
