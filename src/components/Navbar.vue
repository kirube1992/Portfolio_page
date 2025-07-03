<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useThemeStore } from '@/stores/theme'

const themeStore = useThemeStore()
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

        <!-- Navigation -->
        <nav class="nav">
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
      </div>
    </div>
  </header>
</template>

<style scoped>
.nav-link:focus,
.nav-link:focus-visible {
  outline: none;
  box-shadow: none;
}

/* .nav-link:focus,
.nav-link:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 4px;
  border-radius: 4px;
} */

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

@media (max-width: 768px) {
  .nav {
    gap: 1rem;
  }

  .nav-link {
    font-size: 0.9rem;
  }
}
</style>
