export const range = (end: number, start: number = 0) => {
  const range = Array.from({ length: end - start + 1 }, (_, index: number) => {
    return index + start
  })

  return range
}
