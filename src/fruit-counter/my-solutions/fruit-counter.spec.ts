import { describe, expect, it } from 'vitest'
import { getFruitsCount } from './fruit-counter'

describe('getFruitsCount', () => {
  it('should get an object with the fruits as keys and a count of 1 given an array with no repeated fruits', () => {
    const given = ['🍊', '🍌', '🍍', '🍓']
    const actual = getFruitsCount(given)

    expect(actual).toEqual({ '🍊': 1, '🍌': 1, '🍍': 1, '🍓': 1 })
  })
})
