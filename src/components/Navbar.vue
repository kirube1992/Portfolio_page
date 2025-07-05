<script setup lang="ts">
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useThemeStore } from '@/stores/theme'

const themeStore = useThemeStore()
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const isDark = computed(() => themeStore.isDark)
</script>

<template>
  <header class="navbar">
    <div class="container">
      <div class="navbar-content">
        <!-- Brand -->
        <RouterLink to="/" class="brand">
          <span class="brand-text"
            >Kiru<span class="brand-accent">be</span>l<span class="brand-dot">.</span></span
          >
        </RouterLink>

        <!-- Desktop Nav -->
        <nav class="nav desktop-nav">
          <RouterLink to="/" class="nav-link">Home</RouterLink>
          <RouterLink to="/about" class="nav-link">About</RouterLink>
          <RouterLink to="/projects" class="nav-link">Projects</RouterLink>
          <RouterLink to="/contact" class="nav-link">Contact</RouterLink>
        </nav>

        <!-- Theme Toggle -->
        <button @click="themeStore.toggleTheme" class="theme-toggle" aria-label="Toggle theme">
          <span v-if="themeStore.isDark">☀️</span>
          <span v-else>🌙</span>
        </button>

        <!-- Fancy Hamburger Button -->
        <button
          class="hamburger"
          :class="{ open: isMenuOpen, dark: isDark }"
          @click="toggleMenu"
          aria-label="Toggle menu"
        >
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>
      </div>

      <!-- Slide-down Mobile Menu -->
      <transition name="slide-fade">
        <nav v-if="isMenuOpen" class="mobile-nav">
          <RouterLink to="/" class="nav-link" @click="toggleMenu">Home</RouterLink>
          <RouterLink to="/about" class="nav-link" @click="toggleMenu">About</RouterLink>
          <RouterLink to="/projects" class="nav-link" @click="toggleMenu">Projects</RouterLink>
          <RouterLink to="/contact" class="nav-link" @click="toggleMenu">Contact</RouterLink>
        </nav>
      </transition>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  background-color: var(--color-background);
  border-bottom: 1px solid var(--color-border);
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(10px);
}

.navbar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
}

.brand {
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text);
  transition: var(--transition);
}

.brand:hover {
  transform: scale(1.05);
}

.brand-accent {
  color: var(--color-primary);
}

.brand-dot {
  color: var(--color-primary);
}

.nav {
  display: flex;
  gap: 2rem;
}

.nav-link {
  text-decoration: none;
  color: var(--color-text-light);
  font-weight: 500;
  transition: var(--transition);
  position: relative;
}

.nav-link:hover {
  color: var(--color-primary);
}

.nav-link.router-link-active {
  color: var(--color-primary);
}

.nav-link.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -0.5rem;
  left: 0;
  right: 0;
  height: 2px;
  background-color: var(--color-primary);
  border-radius: 1px;
}

/* Theme Toggle */
.theme-toggle {
  background: none;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: var(--border-radius);
  transition: var(--transition);
}

.theme-toggle:hover {
  background-color: var(--color-surface);
}

/* Fancy Hamburger */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 0.5rem;
  border: none;
  background: transparent;
  cursor: pointer;
  z-index: 200;
}

.hamburger .bar {
  height: 3px;
  width: 25px;
  background-color: var(--color-text);
  border-radius: 4px;
  transition: 0.3s;
}

/* Dark mode override */
.hamburger.dark .bar {
  background-color: #fff;
}

.hamburger.open .bar:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}
.hamburger.open .bar:nth-child(2) {
  opacity: 0;
}
.hamburger.open .bar:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* Mobile nav */
.mobile-nav {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background-color: var(--color-background);
  padding: 1rem;
  gap: 1rem;
  border-top: 1px solid var(--color-border);
}

/* Slide-fade transition */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.2s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Mobile-specific */
@media (max-width: 768px) {
  .desktop-nav {
    display: none;
  }

  .hamburger {
    display: flex;
  }
}
</style>
