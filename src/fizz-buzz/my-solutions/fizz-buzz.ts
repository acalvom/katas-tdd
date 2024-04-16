export const getFizzBuzz = (input: number) => {
  const arrayOfZeros = new Array(input).fill(0)
  const arrayOfNumbers = arrayOfZeros.map((item, index) => {
    const position = index + 1
    return position % 3 === 0 && position % 5 === 0
      ? 'fizzbuzz'
      : position % 3 === 0
      ? 'fizz'
      : position % 5 === 0
      ? 'buzz'
      : item + position
  })
  return arrayOfNumbers
}
