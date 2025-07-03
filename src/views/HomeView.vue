<template>
  <div class="home">
    <Hero />

    <!-- Brief Introduction Section -->
    <section class="intro section-spacing">
      <div class="container">
        <div class="intro-content">
          <h2 class="section-title">Welcome to My Portfolio</h2>
          <p class="intro-text">
            I'm a passionate Electrical and Computer Engineer with a strong background in software
            development. I specialize in building innovative solutions that bridge the gap between
            hardware and software, creating impactful applications that solve real-world problems.
          </p>
          <div class="intro-stats">
            <div class="stat">
              <h3 class="stat-number">5+</h3>
              <p class="stat-label">Years Experience</p>
            </div>
            <div class="stat">
              <h3 class="stat-number">15+</h3>
              <p class="stat-label">Projects Completed</p>
            </div>
            <div class="stat">
              <h3 class="stat-number">3</h3>
              <p class="stat-label">Companies Worked</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Projects Preview -->
    <section class="featured-projects section-spacing">
      <div class="container">
        <h2 class="section-title text-center">Featured Projects</h2>
        <div class="projects-grid">
          <div class="project-card">
            <div class="project-image">
              <div class="project-placeholder">🔐</div>
            </div>
            <div class="project-content">
              <h3 class="project-title">Facial Recognition Security System</h3>
              <p class="project-description">
                A security system that uses facial recognition to enhance security measures for
                university access control.
              </p>
              <div class="project-tags">
                <span class="tag">Computer Vision</span>
                <span class="tag">Python</span>
                <span class="tag">Security</span>
              </div>
            </div>
          </div>

          <div class="project-card">
            <div class="project-image">
              <div class="project-placeholder">📊</div>
            </div>
            <div class="project-content">
              <h3 class="project-title">Project Management System</h3>
              <p class="project-description">
                A comprehensive web-based project management system built with the MERN stack for
                efficient team collaboration.
              </p>
              <div class="project-tags">
                <span class="tag">MERN Stack</span>
                <span class="tag">React</span>
                <span class="tag">Node.js</span>
              </div>
            </div>
          </div>

          <div class="project-card">
            <div class="project-image">
              <div class="project-placeholder">🤖</div>
            </div>
            <div class="project-content">
              <h3 class="project-title">Knowledge Base AI</h3>
              <p class="project-description">
                Developing a knowledge-based Large Language Model for enterprise applications and
                intelligent assistance.
              </p>
              <div class="project-tags">
                <span class="tag">AI/ML</span>
                <span class="tag">LLM</span>
                <span class="tag">Python</span>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center" style="margin-top: 2rem">
          <RouterLink to="/projects" class="btn btn-primary"> View All Projects </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import Hero from '@/components/Hero.vue'
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.btn-primary:hover {
  color: #1e293b;
}
.intro {
  background-color: var(--color-background);
}

.intro-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 1.5rem;
}

.intro-text {
  font-size: 1.125rem;
  color: var(--color-text-light);
  line-height: 1.7;
  margin-bottom: 3rem;
}

.intro-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.stat {
  text-align: center;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 0.5rem;
}

.stat-label {
  color: var(--color-text-light);
  font-weight: 500;
}

.featured-projects {
  background-color: var(--color-surface);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.project-card {
  background-color: var(--color-background);
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: var(--transition);
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.project-image {
  height: 200px;
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
  display: flex;
  align-items: center;
  justify-content: center;
}

.project-placeholder {
  font-size: 3rem;
  opacity: 0.8;
}

.project-content {
  padding: 1.5rem;
}

.project-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 0.75rem;
}

.project-description {
  color: var(--color-text-light);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background-color: var(--color-surface);
  color: var(--color-primary);
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }

  .intro-stats {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 1rem;
  }

  .stat-number {
    font-size: 2rem;
  }
}
</style>
