export type evolvablesType = "ant" | "queen-ant" | "ant-farm";

export interface IPosition {
  x: number;
  y: number;
  evolvables: evolvablesType[];
}

export interface IDataMessage {
  i: number;
  positions: IPosition[];
}
