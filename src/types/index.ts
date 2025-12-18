// Unified type definitions for the entire application

// Content and color types
export type ContentType = 'ui-colors' | 'ns-colors' | 'text'
export type PrefixType = 'on' | 'off'
export type Theme = 'light' | 'dark'

// Storage keys
export type StorageKey = 'CONTENT_TYPE' | 'PREFIX_TYPE' | 'PREVIOUS_PREFIX_TYPE'

export const STORAGE_KEYS: Record<StorageKey, string> = {
  CONTENT_TYPE: 'contentType',
  PREFIX_TYPE: 'prefixType',
  PREVIOUS_PREFIX_TYPE: 'previousPrefixType',
} as const

// Switch component types
export interface SwitchOption {
  id: string
  label: string
}

export interface SwitchProps {
  contentType: ContentType
  prefixType: PrefixType
  onContentTypeChange: (type: ContentType) => void
  onPrefixTypeChange: (type: PrefixType) => void
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
  prefixType: PrefixType
  contentType: ContentType
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
  prefixType: PrefixType
  contentType: ContentType
}
