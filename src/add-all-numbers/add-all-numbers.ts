export const getSumAllNumbers = (array: number[]) => {
  return array.reduce((acc, curr) => {
    return acc + curr
  }, 0)
}
