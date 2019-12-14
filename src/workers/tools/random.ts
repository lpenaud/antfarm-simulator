export interface IMinMax {
  min: number;
  max: number;
}

export function randNumber({ min, max }: IMinMax) {
  return min === max ? min : min + Math.random() * (max - min);
}

export function randInt(bounds: IMinMax) {
  return Math.round(randNumber(bounds));
}
