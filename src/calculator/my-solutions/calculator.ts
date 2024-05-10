export const calculator = (str: string): number => {
  const charsSpaced: string =
    str.startsWith('+') || str.startsWith('-')
      ? str.replace(str.charAt(0), str.charAt(0) + ' ')
      : '+ ' + str
  const charArray: string[] = charsSpaced.split(' ')
  const numberArray: number[] = []

  let operator: string = ''
  for (const char of charArray) {
    if (char === '+' || char === '-') {
      operator = char
    } else {
      operator === '+' ? numberArray.push(Number(char)) : numberArray.push(-Number(char))
    }
  }

  return numberArray.reduce((acc, curr) => curr + acc, 0)
}
