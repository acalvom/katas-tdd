export const getFruitsCount = (array: string[]) => {
  return array.reduce((acc, curr) => {
    return { ...acc, [curr]: 1 }
  }, {})
}
