import { describe, expect, it } from 'vitest'
import { getFizzBuzz } from './fizz-buzz'

describe('getFizzBuzz', () => {
  it('should get the array of numbers from 1 to N', () => {
    const given = 2
    const actual = getFizzBuzz(given)

    expect(actual).toEqual([1, 2])
  })

  it('should get the array of numbers from 1 to 2 and fizz in the 3rd position', () => {
    const given = 3
    const actual = getFizzBuzz(given)

    expect(actual).toEqual([1, 2, 'fizz'])
  })
})
