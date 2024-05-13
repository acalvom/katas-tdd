import { describe, expect, it } from 'vitest'
import { cypher } from './caesar'

describe('cypher', () => {
  it('should cypher a letter by one position given a single letter', () => {
    const given = 'd'
    const actual = cypher(given, 1)

    expect(actual).toBe('e')
  })

  it('should cypher a letter by n position given a single letter', () => {
    const given = 's'
    const actual = cypher(given, 5)

    expect(actual).toBe('x')
  })

  it('should cypher a letter by n position given the last letter (z)', () => {
    const given = 'z'
    const actual = cypher(given, 3)

    expect(actual).toBe('c')
  })

  it('should cypher a message by n position', () => {
    const given = 'abc'
    const actual = cypher(given, 3)

    expect(actual).toBe('dfh')
  })

  it('should cypher a message with overflow', () => {
    const given = 'olw'
    const actual = cypher(given, 3)

    expect(actual).toBe('rpb')
  })

  it('should cypher a message with spaces', () => {
    const given = 'my name is mr x'
    const actual = cypher(given, 5)

    expect(actual).toBe('re vjwp vg ci q')
  })

  it('should cypher a message with non-alphabet characters', () => {
    const given = 'my name is mr x!!'
    const actual = cypher(given, 5)

    expect(actual).toBe('re vjwp vg ci q!!')
  })

  it('should cypher a message with cap letters', () => {
    const given = 'My name is Mr. X'
    const actual = cypher(given, 5)

    expect(actual).toBe('re vjwp vg ci. r')
  })
})
