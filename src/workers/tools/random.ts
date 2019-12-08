export function randNumber({ min, max }: { min: number, max: number }): number {
  return min === max ? min : Math.round(min + Math.random() * (max - min));
}
