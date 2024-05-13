import { describe, expect, it } from 'vitest'
import { getPrimeNumbers } from './prime-numbers'

describe('prime-numbers', () => {
  it('should return an array with 1 given 1', () => {
    const actual = getPrimeNumbers(1)
    expect(actual).toEqual([1])
  })

  it('should return an array with 2 given 2', () => {
    const actual = getPrimeNumbers(2)
    expect(actual).toEqual([2])
  })

  it('should return an array with co-prime numbers', () => {
    const given = 6
    const actual = getPrimeNumbers(given)

    expect(actual).toEqual([2, 3])
  })

  it('should return an array with prime numbers', () => {
    const given = 55
    const actual = getPrimeNumbers(given)

    expect(actual).toEqual([5, 11])
  })

  it('should return an array with duplicate prime number', () => {
    const given = 60
    const actual = getPrimeNumbers(given)

    expect(actual).toEqual([2, 2, 3, 5])
  })

  it('should return an array with prime numbers given a large number', () => {
    const given = 25841970
    const actual = getPrimeNumbers(given)

    expect(actual).toEqual([2, 3, 3, 3, 5, 7, 11, 11, 113])
  })
})
