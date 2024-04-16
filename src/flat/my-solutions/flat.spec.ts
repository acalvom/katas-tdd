import { describe, expect, it } from 'vitest'
import { flat } from './flat'

describe('flat', () => {
  it('should get the array of numbers from 1 to N', () => {
    const given = [1, 2]
    const actual = flat(given)

    expect(actual).toEqual([1, 2])
  })
})
