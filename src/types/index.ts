// Unified type definitions for the entire application

// Content and color types
export type ContentType = 'colors' | 'text'
export type ColorType = 'none' | 'uicolor' | 'nscolor'
export type Theme = 'light' | 'dark'

// Storage keys
export type StorageKey = 'CONTENT_TYPE' | 'COLOR_TYPE' | 'PREVIOUS_COLOR_TYPE'

export const STORAGE_KEYS: Record<StorageKey, string> = {
  CONTENT_TYPE: 'contentType',
  COLOR_TYPE: 'colorType',
  PREVIOUS_COLOR_TYPE: 'previousColorType',
} as const

// Switch component types
export interface SwitchOption {
  id: string
  label: string
}

export interface SwitchProps {
  contentType: ContentType
  colorType: ColorType
  onContentTypeChange: (type: ContentType) => void
  onColorTypeChange: (type: ColorType) => void
}

export interface SwitchItemProps {
  options: SwitchOption[]
  value?: string
  onChange?: (selectedId: string) => void
  disabledOptions?: string[]
}

// Data types
export interface ColorData {
  name: string
  hex: string
  rgba: string
  theme: Theme
}

export interface TextData {
  name: string
  size: string
  weight: string
}

// Component prop types
export interface ColorItemProps {
  color: ColorData
  colorType: ColorType
}

export interface TextItemProps {
  text: TextData
}

export interface HeaderProps {
  title: string
  description: React.ReactNode
}

export interface ColorsContainerProps {
  colors: ColorData[]
  theme: Theme
  colorType: ColorType
}
