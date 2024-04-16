export const getFizzBuzz = (input: number) => {
  const arrayOfZeros = new Array(input).fill(0)
  const arrayOfNumbers = arrayOfZeros.map((item, index) => item + index + 1)
  return arrayOfNumbers
}
