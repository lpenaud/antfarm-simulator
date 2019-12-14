export interface IPosition {
  x: number;
  y: number;
  evolvables: string[];
}

export interface IDataMessage {
  cycle: number;
  timestamp: number;
  positions: IPosition[];
}
