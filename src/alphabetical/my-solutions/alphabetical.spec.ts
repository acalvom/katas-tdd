import { describe, expect, it } from 'vitest'
import { getAlphabeticSort } from './alphabetical'

describe('alphabetical', () => {
  it('should return the sorted array of strings when element are sorted', () => {
    const given = ['mario', 'peach']
    const actual = getAlphabeticSort(given)

    expect(actual).toEqual(['mario', 'peach'])
  })

  it('should return the sorted array given a unsorted array', () => {
    const given = ['snape', 'hermione', 'ron', 'harry']
    const actual = getAlphabeticSort(given)

    expect(actual).toEqual(['harry', 'hermione', 'ron', 'snape'])
  })
})
