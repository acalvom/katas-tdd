export const flat = <T>(...arrays: Array<T>[]): Array<T> =>
  arrays.reduce((acc, curr) => [...acc, ...curr], [])
