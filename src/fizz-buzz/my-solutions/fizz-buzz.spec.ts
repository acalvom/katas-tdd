import { describe, expect, it } from 'vitest'
import { getFizzBuzz } from './fizz-buzz'

describe('getFizzBuzz', () => {
  it('should get the array of numbers from 1 to N', () => {
    const given = 4
    const actual = getFizzBuzz(given)

    expect(actual).toEqual([1, 2, 3, 4])
  })
})
