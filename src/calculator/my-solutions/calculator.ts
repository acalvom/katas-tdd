export const calculator = (operation: string): number => {
  const digits = operation.split(' ').map(n => Number(n))

  const sum = digits.reduce((acc, curr) => (Number.isNaN(curr) ? acc : curr + acc), 0)

  return sum
}
