const alphabet = 'abcdefghijklmnopqrstuvwxyz'

const getCypheredLetterPosition = (letter: string, relativeShift: number) => {
  const letterIndex = alphabet.indexOf(letter)
  const alphabetLenght = alphabet.length
  const cypheredLetterIndex = letterIndex + relativeShift

  return cypheredLetterIndex <= alphabetLenght
    ? cypheredLetterIndex
    : cypheredLetterIndex - alphabetLenght
}

export const cypher = (message: string, shift: number): string =>
  Array.from(message.toLowerCase())
    .map((char: string, charIndex: number) => {
      if (!alphabet.includes(char)) return char

      const cypheredCharIndex = getCypheredLetterPosition(char, charIndex + shift)
      return alphabet.charAt(cypheredCharIndex)
    })
    .join('')
