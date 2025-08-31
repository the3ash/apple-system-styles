import { STORAGE_KEYS } from '../types'

// Storage utility functions with better error handling and type safety
export { STORAGE_KEYS }

export const storage = {
  // Get item from localStorage with type safety
  get: <T>(key: string, defaultValue: T): T => {
    try {
      const item = localStorage.getItem(key)
      if (!item) return defaultValue
      
      const parsed = JSON.parse(item)
      return parsed ?? defaultValue
    } catch (error) {
      console.warn(`Failed to get item from localStorage: ${key}`, error)
      return defaultValue
    }
  },

  // Set item to localStorage with error handling
  set: <T>(key: string, value: T): void => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.warn(`Failed to set item to localStorage: ${key}`, error)
    }
  },

  // Remove item from localStorage
  remove: (key: string): void => {
    try {
      localStorage.removeItem(key)
    } catch (error) {
      console.warn(`Failed to remove item from localStorage: ${key}`, error)
    }
  },

  // Clear all localStorage
  clear: (): void => {
    try {
      localStorage.clear()
    } catch (error) {
      console.warn('Failed to clear localStorage', error)
    }
  },
}
