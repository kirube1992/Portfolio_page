<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div id="app">
    <Navbar />
    <main>
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: var(--color-text);
  background-color: var(--color-background);
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

:root {
  --color-primary: #3b82f6;
  --color-primary-dark: #2563eb;
  --color-secondary: #64748b;
  --color-text: #1e293b;
  --color-text-light: #64748b;
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-border: #e2e8f0;
  --color-success: #10b981;
  --color-error: #ef4444;
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --border-radius: 0.5rem;
  --transition: all 0.3s ease;
}

/* Dark theme variables */
[data-theme="dark"] {
  --color-text: #f1f5f9;
  --color-text-light: #94a3b8;
  --color-background: #0f172a;
  --color-surface: #1e293b;
  --color-border: #334155;
}

/* Utility classes */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.section-spacing {
  padding: 4rem 0;
}

.text-center {
  text-align: center;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: var(--border-radius);
  font-weight: 500;
  text-decoration: none;
  transition: var(--transition);
  cursor: pointer;
}

.btn-primary {
  background-color: var(--color-primary);
  color: white;
}

.btn-primary:hover {
  background-color: var(--color-primary-dark);
}

.btn-outline {
  background-color: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
}

.btn-outline:hover {
  background-color: var(--color-primary);
  color: white;
}
</style>

