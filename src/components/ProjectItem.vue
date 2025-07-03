<template>
  <article class="project-item">
    <div class="project-header">
      <div class="project-icon">{{ project.icon }}</div>
      <div class="project-meta">
        <span class="project-category">{{ project.category }}</span>
        <span class="project-status" :class="statusClass">{{ project.status }}</span>
      </div>
    </div>
    
    <div class="project-content">
      <h3 class="project-title">{{ project.title }}</h3>
      <p class="project-description">{{ project.description }}</p>
      
      <div class="project-technologies">
        <span 
          class="tech-tag" 
          v-for="tech in project.technologies" 
          :key="tech"
        >
          {{ tech }}
        </span>
      </div>
      
      <details class="project-details">
        <summary class="details-toggle">View Details</summary>
        <div class="details-content">
          <p class="long-description">{{ project.longDescription }}</p>
          
          <div class="features-section" v-if="project.features && project.features.length > 0">
            <h4 class="features-title">Key Features:</h4>
            <ul class="features-list">
              <li v-for="feature in project.features" :key="feature">{{ feature }}</li>
            </ul>
          </div>
        </div>
      </details>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Project {
  title: string
  description: string
  longDescription: string
  technologies: string[]
  category: string
  status: string
  icon: string
  features?: string[]
}

const props = defineProps<{
  project: Project
}>()

const statusClass = computed(() => {
  return {
    'status-completed': props.project.status === 'Completed',
    'status-progress': props.project.status === 'In Progress',
    'status-planned': props.project.status === 'Planned'
  }
})
</script>

<style scoped>
.project-item {
  background-color: var(--color-background);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  box-shadow: var(--shadow-md);
  transition: var(--transition);
  border: 1px solid var(--color-border);
}

.project-item:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.project-icon {
  font-size: 2.5rem;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
  border-radius: var(--border-radius);
  color: white;
}

.project-meta {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-end;
}

.project-category {
  background-color: var(--color-surface);
  color: var(--color-text-light);
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
}

.project-status {
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
}

.status-completed {
  background-color: var(--color-success);
  color: white;
}

.status-progress {
  background-color: #f59e0b;
  color: white;
}

.status-planned {
  background-color: var(--color-secondary);
  color: white;
}

.project-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.project-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text);
  margin: 0;
}

.project-description {
  color: var(--color-text-light);
  line-height: 1.6;
  margin: 0;
}

.project-technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  background-color: var(--color-surface);
  color: var(--color-primary);
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  border: 1px solid var(--color-border);
}

.project-details {
  margin-top: 0.5rem;
}

.details-toggle {
  color: var(--color-primary);
  cursor: pointer;
  font-weight: 500;
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--color-border);
  list-style: none;
  outline: none;
}

.details-toggle::-webkit-details-marker {
  display: none;
}

.details-toggle::before {
  content: '▶';
  margin-right: 0.5rem;
  transition: var(--transition);
}

.project-details[open] .details-toggle::before {
  transform: rotate(90deg);
}

.details-content {
  padding: 1rem 0;
  border-top: 1px solid var(--color-border);
  margin-top: 0.5rem;
}

.long-description {
  color: var(--color-text-light);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.features-section {
  margin-top: 1rem;
}

.features-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 0.75rem;
}

.features-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.features-list li {
  color: var(--color-text-light);
  padding: 0.25rem 0;
  position: relative;
  padding-left: 1.5rem;
}

.features-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--color-success);
  font-weight: bold;
}

@media (max-width: 768px) {
  .project-item {
    padding: 1rem;
  }
  
  .project-header {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
  
  .project-meta {
    flex-direction: row;
    align-items: center;
  }
  
  .project-icon {
    font-size: 2rem;
    width: 50px;
    height: 50px;
  }
}
</style>

