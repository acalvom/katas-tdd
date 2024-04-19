import { describe, expect, it } from 'vitest'
import { range } from './range'

describe('range', () => {
  it('should return an array of 2 numbers consecutive given a start and end number when step is 1', () => {
    const given = 1
    const actual = range(given, given + 1)

    expect(actual).toEqual([1, 2])
  })
})
