import { describe, expect, it } from 'vitest'
import { range } from './range'

describe('range', () => {
  it('should return an array of 2 consecutive numbers given a start and end number when step is 1', () => {
    const start = 1
    const actual = range(start + 1, start)

    expect(actual).toEqual([1, 2])
  })

  it('should return an array of consecutive numbers starting in 1 given an end number when step is > 1', () => {
    const end = 5
    const actual = range(end, 1)

    expect(actual).toEqual([1, 2, 3, 4, 5])
  })

  it('should return an array of consecutive numbers given a start and end number when step is > 1', () => {
    const start = 2
    const end = 5
    const actual = range(end, start)

    expect(actual).toEqual([2, 3, 4, 5])
  })

  it('should return an array of consecutive numbers starting at 0 given an end number', () => {
    const end = 3
    const actual = range(end)

    expect(actual).toEqual([0, 1, 2, 3])
  })
})
