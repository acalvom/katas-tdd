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

  it('should substract two numbers', () => {
    const input = '1 - 2'
    const actual = calculator(input)

    expect(actual).toEqual(-1)
  })

  it('should substract more than two numbers', () => {
    const input = '5 - 1 - 2'
    const actual = calculator(input)

    expect(actual).toEqual(2)
  })

  it('should calculate with mixed operators', () => {
    const input = '5 - 1 + 2'
    const actual = calculator(input)

    expect(actual).toEqual(6)
  })

  it('should calculate with mixed operators starting with negative number', () => {
    const input = '-5 - 1 + 2'
    const actual = calculator(input)

    expect(actual).toEqual(-4)
  })

  it('should calculate with two digits number', () => {
    const input = '-5 + 1 - 2 + 10'
    const actual = calculator(input)

    expect(actual).toEqual(4)
  })
})
