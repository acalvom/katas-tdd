import { describe, expect, it } from 'vitest'
import { filterEvenNumbers } from './filter-even-numbers'

describe('filterEvenNumbers', () => {
  it('should not filter any number given an array of odd numbers ', () => {
    const given = [1, 3, 5, 7]
    const actual = filterEvenNumbers(given)

    expect(actual).toEqual([1, 3, 5, 7])
  })

  it('should filter all number given an array of even numbers ', () => {
    const given = [2, 4, 6, 8]
    const actual = filterEvenNumbers(given)

    expect(actual).toEqual([])
  })

  it('should filter even numbers given an array of numbers ', () => {
    const given = [3, 7, 1, 3, 6, 9, 12, 4]
    const actual = filterEvenNumbers(given)

    expect(actual).toEqual([3, 7, 1, 3, 9])
  })
})
