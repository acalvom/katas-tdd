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

  it('should get the array of numbers from 1 to 2 and fizz in the 3rd position and buzz in the 5th', () => {
    const given = 5
    const actual = getFizzBuzz(given)

    expect(actual).toEqual([1, 2, 'fizz', 4, 'buzz'])
  })

  it('should get the array of numbers from 1 to 2, fizz in the 3rd position, buzz in the 5th and fizzbuzz in 15th', () => {
    const given = 15
    const actual = getFizzBuzz(given)

    expect(actual).toEqual([
      1,
      2,
      'fizz',
      4,
      'buzz',
      'fizz',
      7,
      8,
      'fizz',
      'buzz',
      11,
      'fizz',
      13,
      14,
      'fizzbuzz'
    ])
  })
})
