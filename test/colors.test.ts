import { describe, expect, it } from 'vite-plus/test'
import { filterColorsByTheme } from '../src/utils/colors'
import type { RawColorData } from '../src/utils/colors'

const colors: RawColorData[] = [
  { name: 'light', hex: '#fff', rgba: 'rgba(255, 255, 255, 1)', theme: 'light' },
  { name: 'dark', hex: '#000', rgba: 'rgba(0, 0, 0, 1)', theme: 'dark' },
  { name: 'invalid', hex: '#f00', rgba: 'rgba(255, 0, 0, 1)', theme: 'unknown' },
]

describe('filterColorsByTheme', () => {
  it('returns only colors with the requested supported theme', () => {
    expect(filterColorsByTheme(colors, 'light')).toEqual([colors[0]])
    expect(filterColorsByTheme(colors, 'dark')).toEqual([colors[1]])
  })
})
