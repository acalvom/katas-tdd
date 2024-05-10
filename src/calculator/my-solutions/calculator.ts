export const calculator = (str: string): number => {
  let chars: string = str

  if (str.startsWith('+') || str.startsWith('-')) {
    chars = str.replace(str.charAt(0), str.charAt(0) + ' ')
  } else {
    chars = '+ ' + str
  }
  let charArray: string[] = chars.split(' ')

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
