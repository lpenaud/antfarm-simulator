import Ant from "./ant.js";
import Adult from "./state/adult.js";
import CreateAntFarm from "./work/create-antfarm.js";
import { IMinMax } from "../tools/random.js";

export interface IMonthDate {
  month: number;
  date: number;
}

export interface ISeason {
  begin: IMonthDate;
  end: IMonthDate;
}

export default class Queen extends Ant {
  public readonly adultAge: IMinMax = { min: 1.26144E11, max: 3.1536E11 };
  public readonly eggLayingSeason: ISeason = { begin: { month: 2, date: 20 }, end: { month: 5, date: 20 } };

  public constructor(timestamp: number) {
    super();
    this.state = new Adult(timestamp, this);
    this.work = new CreateAntFarm();
  }

  /**
   * toString
   */
  public toString(): string {
    return "queen-ant";
  }
}
