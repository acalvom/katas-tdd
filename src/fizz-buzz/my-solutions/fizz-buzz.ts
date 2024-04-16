export const getFizzBuzz = (input: number) =>
  Array.from({ length: input }, (_, index) => {
    const position = index + 1
    return position % 3 === 0 && position % 5 === 0
      ? 'fizzbuzz'
      : position % 3 === 0
      ? 'fizz'
      : position % 5 === 0
      ? 'buzz'
      : position
  })
