export const getFizzBuzz = (input: number) => {
  const arrayOfZeros = new Array(input).fill(0)
  const arrayOfNumbers = arrayOfZeros.map((item, index) => {
    return (index + 1) / 3 === 1 ? 'fizz' : item + index + 1
  })
  return arrayOfNumbers
}
