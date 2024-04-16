import { describe, expect, it } from 'vitest'
import { getPowerOfTwo } from './power-of-two'

describe('getPowerOfTwo', () => {
  it('should get the power of two number array given an array numbers', () => {
    const given = [0, 1, 7, 25]
    const actual = getPowerOfTwo(given)
    expect(actual).toEqual([0, 1, 49, 625])
  })
})
