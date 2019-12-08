import Grid from "./components/grid.js";
import Setup from "./components/setup.js";
import { IDataMessage } from "./lib/exchange.js";

const DEFAULT_COLUMN = 50;
const DEFAULT_LINE = 30;
const DEFAULT_WIDTH = 20;
const DEFAULT_QUEEN = 1;

(() => {
  const antWorker = new Worker("/build/workers/index.js", { type: "module" });
  const container = document.getElementById("container");
  const grid = new Grid({ column: DEFAULT_COLUMN, line: DEFAULT_LINE, width: DEFAULT_WIDTH });
  const setup = new Setup({ column: DEFAULT_COLUMN, line: DEFAULT_LINE, queen: DEFAULT_QUEEN });
  grid.svg.id = "grid";
  antWorker.addEventListener("message", (ev) => {
    const data = ev.data as IDataMessage;
    console.log("receive", data);
    for (const position of data.positions) {
      grid.updateRect(position);
    }
  });

  setup.form.addEventListener("submit", (ev) => {
    antWorker.postMessage({ column: setup.column, line: setup.line, queen: setup.queen });
    ev.preventDefault();
  });
  setup.inputColumn.addEventListener("change", () => grid.setDimension({ column: setup.column }));
  setup.inputLine.addEventListener("change", () => grid.setDimension({ line: setup.line }));

  container.appendChild(grid.svg);
})();
