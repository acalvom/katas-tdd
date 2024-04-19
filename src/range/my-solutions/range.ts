export const range = (start: number, end: number) => {
  const range = Array.from({ length: end }, (_, index: number) => {
    return index + start
  })

  return range
}
