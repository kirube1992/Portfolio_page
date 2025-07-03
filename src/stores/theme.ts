import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const isDark = ref(false)

  const theme = computed(() => isDark.value ? 'dark' : 'light')

  function toggleTheme() {
    isDark.value = !isDark.value
  }

  function setTheme(newTheme: 'light' | 'dark') {
    isDark.value = newTheme === 'dark'
  }

  function updateDocumentTheme() {
    if (isDark.value) {
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      document.documentElement.removeAttribute('data-theme')
    }
  }

  // Initialize theme on store creation
  function initializeTheme() {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setTheme(savedTheme as 'light' | 'dark')
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setTheme(prefersDark ? 'dark' : 'light')
    }
    updateDocumentTheme()
  }

  // Watch for theme changes and save to localStorage
  watch(theme, (newTheme) => {
    localStorage.setItem('theme', newTheme)
    updateDocumentTheme()
  })

  return {
    isDark,
    theme,
    toggleTheme,
    setTheme,
    initializeTheme
  }
})

