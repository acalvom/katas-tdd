export const getPrimeNumbers = (input: number): number[] => {
  if (input <= 2) return [input]

  let factorials: number[] = []
  let divider: number = 2

  while (divider <= input) {
    if (input % divider === 0) {
      factorials.push(divider)
      input /= divider
    } else {
      divider++
    }
  }

  return factorials
}
