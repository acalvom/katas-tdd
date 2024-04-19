export const range = (end: number, start: number = 0) => {
  let range: number[] = []

  if (start <= end) {
    range = Array.from({ length: end - start + 1 }, (_, index: number) => {
      return start + index
    })
  } else {
    range = Array.from({ length: start - end + 1 }, (_, index: number) => {
      return start - index
    })
  }

  return range
}
