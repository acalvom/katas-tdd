export const range = (end: number, start: number = 0) =>
  start <= end
    ? Array.from({ length: end - start + 1 }, (_, index: number) => start + index)
    : Array.from({ length: start - end + 1 }, (_, index: number) => start - index)
