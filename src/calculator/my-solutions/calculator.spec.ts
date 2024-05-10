import { describe, expect, it } from 'vitest'
import { calculator } from './calculator'

describe('calculator', () => {
  it('should return 0 given an empty sting ', () => {
    const actual = calculator('')

    expect(actual).toEqual(0)
  })

  it('should add two numbers', () => {
    const input = '1 + 2'
    const actual = calculator(input)

    expect(actual).toEqual(3)
  })

  it('should add more than two numbers', () => {
    const input = '1 + 2 + 3'
    const actual = calculator(input)

    expect(actual).toEqual(6)
  })
})
