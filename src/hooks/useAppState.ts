import { useState } from 'react'
import type { ContentType, PrefixType } from '../types'
import { storage, STORAGE_KEYS } from '../utils/storage'

export const useAppState = () => {
  // Initialize state directly from localStorage, fallback to first option
  const [contentType, setContentType] = useState<ContentType>(() => {
    const saved = storage.get<ContentType | null>(STORAGE_KEYS.CONTENT_TYPE, null)
    if (saved === 'ui-colors' || saved === 'ns-colors' || saved === 'text') {
      return saved
    }
    return 'ui-colors'
  })

  const [prefixType, setPrefixType] = useState<PrefixType>(() => {
    const saved = storage.get<PrefixType | null>(STORAGE_KEYS.PREFIX_TYPE, null)
    return saved || 'off'
  })

  // Remember the previous prefixType selection when switching to text mode
  const [previousPrefixType, setPreviousPrefixType] = useState<PrefixType>(() => {
    const saved = storage.get<PrefixType | null>(STORAGE_KEYS.PREVIOUS_PREFIX_TYPE, null)
    return saved || 'off'
  })

  // Wrapper functions to save to localStorage when values change
  const handleContentTypeChange = (newContentType: ContentType) => {
    setContentType(newContentType)
    storage.set(STORAGE_KEYS.CONTENT_TYPE, newContentType)

    if (newContentType === 'text') {
      setPreviousPrefixType(prefixType)
      storage.set(STORAGE_KEYS.PREVIOUS_PREFIX_TYPE, prefixType)
      setPrefixType('off')
      storage.set(STORAGE_KEYS.PREFIX_TYPE, 'off')
    } else if (newContentType === 'ui-colors' || newContentType === 'ns-colors') {
      // Only restore previous prefix type if coming from text mode
      // But we need to check if we are currently in text mode to avoid overwriting if switching between ui/ns colors
      if (contentType === 'text') {
        setPrefixType(previousPrefixType)
        storage.set(STORAGE_KEYS.PREFIX_TYPE, previousPrefixType)
      }
    }
  }

  const handlePrefixTypeChange = (newPrefixType: PrefixType) => {
    setPrefixType(newPrefixType)
    storage.set(STORAGE_KEYS.PREFIX_TYPE, newPrefixType)
  }

  return {
    contentType,
    prefixType,
    setContentType: handleContentTypeChange,
    setPrefixType: handlePrefixTypeChange,
  }
}
