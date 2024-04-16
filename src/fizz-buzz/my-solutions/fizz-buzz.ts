export const getFizzBuzz = (input: number) => {
  const arrayOfZeros = new Array(input).fill(0)
  const arrayOfNumbers = arrayOfZeros.map((item, index) => {
    if ((index + 1) % 3 === 0 && (index + 1) % 5 === 0) return 'fizzbuzz'
    else if ((index + 1) % 3 === 0) return 'fizz'
    else if ((index + 1) % 5 === 0) return 'buzz'
    else return item + index + 1
  })
  return arrayOfNumbers
}
