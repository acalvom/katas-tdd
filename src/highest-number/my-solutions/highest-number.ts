export const getHighestNumber = (array: number[]) => {
  const sortedArray = array.sort((a: number, b: number) => b - a)
  return sortedArray.at(0)
}
