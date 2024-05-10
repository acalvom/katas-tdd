import { describe, expect, it } from 'vitest'
import { calculator } from './calculator'

describe('calculator', () => {
  it('should return 0 given an empty sting ', () => {
    const actual = calculator('')

    expect(actual).toEqual(0)
  })
})
