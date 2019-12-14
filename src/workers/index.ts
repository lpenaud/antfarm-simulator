import World, { IWorldStatus } from "./world/world.js";
import { IDataMessage } from "../lib/exchange.js";
import Queen from "./ant/queen.js";
import { randInt } from "./tools/random.js";

const TIMEOUT = 500;

function promiseTimeout(fn: () => void, ms: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      fn();
      resolve();
    }, ms);
  });
}

function postStatusMessage(cycle: number, timestamp: number, status: IWorldStatus[]) {
  const msg: IDataMessage = {
    cycle,
    timestamp,
    positions: status.map(({ x, y, evolvables }) => ({
      x,
      y,
      evolvables: evolvables.map((e) => e.toString()),
    })),
  };
  postMessage(msg);
}

addEventListener("message", (ev) => {
  const { data } = ev;
  console.log("receive", data);
  const world = new World(data.column, data.line);
  const now = Date.now();
  let cycle = 0;
  const func = () => {
    const timestamp = now + cycle * 8.64E7;
    world.evolve(timestamp);
    postStatusMessage(cycle++, timestamp, world.exec());
    if (cycle >= 1825) {
      console.log("finish");
    } else {
      promiseTimeout(func, TIMEOUT);
    }
  };
  for (let i = 0; i < data.queen; i++) {
    const queen = new Queen(now);
    const x = randInt({ min: 0, max: data.column - 1 });
    const y = randInt({ min: 0, max: data.line - 1 });
    world.getPosition(x, y).arrive(queen);
  }
  postStatusMessage(cycle++, now, world.exec());
  promiseTimeout(func, TIMEOUT);
});
