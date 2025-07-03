<template>
  <div class="projects-page">
    <div class="container section-spacing">
      <div class="projects-header">
        <h1 class="page-title">My Projects</h1>
        <p class="page-subtitle">
          A showcase of my work spanning from security systems to web applications and AI solutions
        </p>
      </div>

      <div class="projects-grid">
        <ProjectItem 
          v-for="(project, index) in projects" 
          :key="index" 
          :project="project" 
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ProjectItem from '@/components/ProjectItem.vue'

interface Project {
  title: string
  description: string
  longDescription: string
  technologies: string[]
  category: string
  status: string
  icon: string
  features: string[]
}

const projects = ref<Project[]>([
  {
    title: 'Facial Recognition Security System',
    description: 'A security system that uses facial recognition to enhance security measures for university access control.',
    longDescription: 'Developed a comprehensive facial recognition security system for university campus access control. The system uses computer vision algorithms to identify authorized personnel and grant access to restricted areas. Features real-time face detection, recognition accuracy optimization, and integration with existing security infrastructure.',
    technologies: ['Python', 'OpenCV', 'TensorFlow', 'Computer Vision', 'Security'],
    category: 'Security & AI',
    status: 'Completed',
    icon: '🔐',
    features: [
      'Real-time face detection and recognition',
      'High accuracy identification system',
      'Integration with access control hardware',
      'Comprehensive logging and monitoring',
      'User management interface'
    ]
  },
  {
    title: 'Project Management System',
    description: 'A comprehensive web-based project management system built with the MERN stack for efficient team collaboration.',
    longDescription: 'Built a full-featured project management system to streamline team collaboration and project tracking. The application includes task management, team communication, progress tracking, and reporting features. Designed with scalability in mind to handle multiple projects and large teams.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'MERN Stack'],
    category: 'Web Development',
    status: 'Completed',
    icon: '📊',
    features: [
      'Task creation and assignment',
      'Team collaboration tools',
      'Progress tracking and reporting',
      'File sharing and document management',
      'Real-time notifications'
    ]
  },
  {
    title: 'Portfolio Website for Cypher Technology',
    description: 'Professional portfolio website showcasing company services and achievements in the technology sector.',
    longDescription: 'Designed and developed a modern, responsive portfolio website for Cypher Technology. The site showcases the company\'s services, team, and successful projects. Implemented with modern web technologies and optimized for performance and SEO.',
    technologies: ['Vue.js', 'CSS3', 'JavaScript', 'Responsive Design'],
    category: 'Web Development',
    status: 'Completed',
    icon: '🌐',
    features: [
      'Responsive design for all devices',
      'Modern and professional UI/UX',
      'SEO optimization',
      'Fast loading performance',
      'Content management system'
    ]
  },
  {
    title: 'Document Management System',
    description: 'Enterprise-level document management system for efficient document storage, retrieval, and collaboration.',
    longDescription: 'Participated in the development of a comprehensive document management system for enterprise use. The system provides secure document storage, version control, search capabilities, and collaboration features. Built with scalability and security as primary concerns.',
    technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Enterprise Architecture'],
    category: 'Enterprise Software',
    status: 'Completed',
    icon: '📄',
    features: [
      'Secure document storage',
      'Version control and history',
      'Advanced search capabilities',
      'User access control',
      'Audit trails and compliance'
    ]
  },
  {
    title: 'Enterprise Communication Media',
    description: 'Development of enterprise communication platform for internal team collaboration and messaging.',
    longDescription: 'Contributed to the development of an enterprise communication platform designed to facilitate internal team collaboration. The platform includes messaging, file sharing, video conferencing integration, and project-specific communication channels.',
    technologies: ['React', 'Node.js', 'WebSocket', 'Real-time Communication'],
    category: 'Enterprise Software',
    status: 'Completed',
    icon: '💬',
    features: [
      'Real-time messaging',
      'File sharing capabilities',
      'Video conferencing integration',
      'Channel-based organization',
      'Mobile-responsive design'
    ]
  },
  {
    title: 'Knowledge Base AI (LLM)',
    description: 'Developing a knowledge-based Large Language Model for enterprise applications and intelligent assistance.',
    longDescription: 'Currently developing a knowledge-based Large Language Model tailored for enterprise applications. The system is designed to provide intelligent assistance, answer domain-specific questions, and help with decision-making processes. Focus on accuracy, relevance, and integration with existing enterprise systems.',
    technologies: ['Python', 'Machine Learning', 'NLP', 'AI/ML', 'LLM'],
    category: 'AI & Machine Learning',
    status: 'In Progress',
    icon: '🤖',
    features: [
      'Domain-specific knowledge base',
      'Natural language processing',
      'Intelligent query responses',
      'Enterprise system integration',
      'Continuous learning capabilities'
    ]
  }
])
</script>

<style scoped>
.projects-page {
  background-color: var(--color-background);
}

.projects-header {
  text-align: center;
  margin-bottom: 4rem;
}

.page-title {
  font-size: 3rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 1rem;
}

.page-subtitle {
  font-size: 1.25rem;
  color: var(--color-text-light);
  max-width: 600px;
  margin: 0 auto;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2.5rem;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>

