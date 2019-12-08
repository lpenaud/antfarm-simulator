import Work from "./work.js";
import World from "../../world/world.js";
import Position from "../../world/position.js";
import Queen, { ISeason, IMonthDate } from "../queen.js";
import EggCommand from "../../commands/egg-command.js";

function getLayingSeason(timestamp: number, { date, month }: IMonthDate) {
  const eggLayingSeasonBegining = new Date(timestamp);
  eggLayingSeasonBegining.setMonth(month);
  eggLayingSeasonBegining.setDate(date);
  return eggLayingSeasonBegining.getTime();
}

export default class CreateEgg extends Work {
  public work(timestamp: number, world: World, position: Position, queen: Queen): void {
    const begining = getLayingSeason(timestamp, queen.eggLayingSeason.begin);
    const ending = getLayingSeason(timestamp, queen.eggLayingSeason.end);
    if (timestamp >= begining && timestamp < ending) {
      position.addCommands(new EggCommand(timestamp, position, queen.antFarm));
    }
  }

}
