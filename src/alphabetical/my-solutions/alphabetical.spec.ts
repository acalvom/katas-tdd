import { describe, expect, it } from 'vitest'
import { getAlphabeticSort } from './alphabetical'

describe('alphabetical', () => {
  it('should return the sorted array of strings when element are sorted', () => {
    const given = ['mario', 'peach']
    const actual = getAlphabeticSort(given)

    expect(actual).toEqual(['mario', 'peach'])
  })
})
