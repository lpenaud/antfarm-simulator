import World, { IWorldStatus } from "./world/world.js";
import { IDataMessage, evolvablesType } from "../lib/exchange.js";
import Queen from "./ant/queen.js";
import { randNumber } from "./tools/random.js";

const TIMEOUT = 500;

function promiseTimeout(fn: () => void, ms: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      fn();
      resolve();
    }, ms);
  });
}

function postStatusMessage(i: number, status: IWorldStatus[]) {
  const msg: IDataMessage = {
    i,
    positions: status.map(({ x, y, evolvables }) => ({
      x,
      y,
      evolvables: evolvables.map((e) => e.toString() as evolvablesType),
    })),
  };
  postMessage(msg);
}

addEventListener("message", (ev) => {
  const { data } = ev;
  console.log("receive", data);
  const world = new World(data.column, data.line);
  const timestamp = Date.now();
  let cycle = 0;
  const func = () => {
    world.evolve(cycle * 8.64E7 + timestamp);
    postStatusMessage(cycle++, world.exec());
    if (cycle >= 1825) {
      console.log("finish");
    } else {
      promiseTimeout(func, TIMEOUT);
    }
  };
  for (let i = 0; i < data.queen; i++) {
    const queen = new Queen(timestamp);
    const x = randNumber({ min: 0, max: data.column });
    const y = randNumber({ min: 0, max: data.line });
    console.log(x, y);
    world.getPosition(x, y).arrive(queen);
  }
  postStatusMessage(cycle++, world.exec());
  promiseTimeout(func, TIMEOUT);
});
