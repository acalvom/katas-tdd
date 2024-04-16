export const flat = <T>(...arrays: Array<T>[]): Array<T> => {
  return arrays.reduce((acc, curr) => {
    return [...acc, ...curr]
  }, [])
}
