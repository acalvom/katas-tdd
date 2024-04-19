import { describe, expect, it } from 'vitest'
import { Person, grouper } from './grouper'

describe('grouper', () => {
  it('should return an object based on the People given array of 1 person', () => {
    const given: Person[] = [{ name: 'Michael Scott', age: 42 }]
    const actual = grouper(given)

    expect(actual).toEqual({ 42: ['Michael Scott'] })
  })

  it('should return an object with array of names given array of 2 people with same age', () => {
    const given: Person[] = [
      { name: 'Michael Scott', age: 42 },
      { name: 'Phyllis Smith', age: 42 }
    ]
    const actual = grouper(given)

    expect(actual).toEqual({ 42: ['Michael Scott', 'Phyllis Smith'] })
  })
})
