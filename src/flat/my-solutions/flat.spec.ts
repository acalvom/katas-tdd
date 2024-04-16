import { describe, expect, it } from 'vitest'
import { flat } from './flat'

describe('flat', () => {
  it('should return the array of numbers with depth of 1', () => {
    const given = [1, 2]
    const actual = flat(given)

    expect(actual).toEqual([1, 2])
  })

  it('should return a flatten array given an array of numbers with depth of 2', () => {
    const given = [[3, 4]]
    const actual = flat(...given)

    expect(actual).toEqual([3, 4])
  })

  it('should return a flatten array given 2 arrays of numbers with depth of 2', () => {
    const given = [
      [1, 2],
      [3, 4]
    ]
    const actual = flat(...given)

    expect(actual).toEqual([1, 2, 3, 4])
  })
})
