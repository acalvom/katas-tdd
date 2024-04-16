import { describe, expect, it } from 'vitest'
import { getHighestNumber } from './highest-number'

describe('getHighestNumber', () => {
  it('should get the highest number given an array of one number', () => {
    const given = [0, 100, 10]
    const actual = getHighestNumber(given)
    expect(actual).toBe(100)
  })
})
