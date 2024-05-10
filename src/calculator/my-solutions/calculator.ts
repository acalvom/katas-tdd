export const calculator = (str: string): number => {
  const charArray: string = str.charAt(0).includes('+ -')
    ? str.replaceAll(' ', '')
    : '+' + str.replaceAll(' ', '')
  const numberArray: number[] = []
  let operator: string = ''

  for (const char of charArray) {
    if (!(char === '+' || char === '-'))
      operator === '+' ? numberArray.push(Number(char)) : numberArray.push(-Number(char))
    else operator = char
  }

  return numberArray.reduce((acc, curr) => curr + acc, 0)
}
