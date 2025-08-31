import { useState } from 'react'
import type { ContentType, ColorType } from '../types'
import { storage, STORAGE_KEYS } from '../utils/storage'

export const useAppState = () => {
  // Initialize state directly from localStorage, fallback to first option
  const [contentType, setContentType] = useState<ContentType>(() => {
    const saved = storage.get<ContentType | null>(STORAGE_KEYS.CONTENT_TYPE, null)
    return saved || 'colors'
  })

  // Remember the previous colorType selection when switching to text mode
  const [previousColorType, setPreviousColorType] = useState<ColorType>(() => {
    const saved = storage.get<ColorType | null>(STORAGE_KEYS.PREVIOUS_COLOR_TYPE, null)
    return saved || 'none'
  })

  const [colorType, setColorType] = useState<ColorType>(() => {
    const saved = storage.get<ColorType | null>(STORAGE_KEYS.COLOR_TYPE, null)
    return saved || 'none'
  })

  // Wrapper functions to save to localStorage when values change
  const handleContentTypeChange = (newContentType: ContentType) => {
    setContentType(newContentType)
    storage.set(STORAGE_KEYS.CONTENT_TYPE, newContentType)

    if (newContentType === 'text') {
      setPreviousColorType(colorType)
      storage.set(STORAGE_KEYS.PREVIOUS_COLOR_TYPE, colorType)
      setColorType('none')
      storage.set(STORAGE_KEYS.COLOR_TYPE, 'none')
    } else if (newContentType === 'colors') {
      setColorType(previousColorType)
      storage.set(STORAGE_KEYS.COLOR_TYPE, previousColorType)
    }
  }

  const handleColorTypeChange = (newColorType: ColorType) => {
    setColorType(newColorType)
    storage.set(STORAGE_KEYS.COLOR_TYPE, newColorType)
  }

  return {
    contentType,
    colorType,
    setContentType: handleContentTypeChange,
    setColorType: handleColorTypeChange,
  }
}
