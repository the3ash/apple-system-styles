import type { ColorData, Theme } from '@/types'

export interface RawColorData {
  name: string
  hex: string
  rgba: string
  theme: string
}

export const filterColorsByTheme = (colors: RawColorData[], theme: Theme): ColorData[] =>
  colors.filter((color): color is ColorData => color.theme === theme)
