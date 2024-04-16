import { describe, expect, it } from 'vitest'
import { getSumAllNumbers } from './add-all-numbers'

describe('getSumAllNumbers', () => {
  it('should get the sum of all numbers array given an array numbers', () => {
    const given = [10, 2, 5, 3]
    const actual = getSumAllNumbers(given)

    expect(actual).toBe(20)
  })
})
