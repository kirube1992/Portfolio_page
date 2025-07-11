<template>
  <div class="about-page">
    <div class="container section-spacing">
      <div class="about-header">
        <h1 class="page-title">About Me</h1>
        <p class="page-subtitle">
          Get to know more about my journey, experience, and passion for technology
        </p>
      </div>

      <div class="about-content">
        <!-- Personal Introduction -->
        <section class="about-intro">
          <div class="intro-text">
            <h2 class="section-title">Hello, I'm Kirubel</h2>
            <p class="intro-paragraph">
              As an Electrical and Computer Engineer, I bring a strong foundation in mathematics and
              hardware, which I applied in developing a facial recognition security system for my
              university. My journey includes a microverse bootcamp, an internship at Vintage
              Technology, and roles as a developer and security engineer at Cypher Technology, and
              currently at Mesh-info.
            </p>
            <p class="intro-paragraph">
              I am passionate about building innovative software solutions that bridge the gap
              between hardware and software. My experience spans from embedded programming to
              full-stack web development, always with a focus on creating impactful applications
              that solve real-world problems.
            </p>
          </div>
        </section>

        <!-- Timeline -->
        <div class="timeline-container">
          <!-- Education Section -->
          <section class="timeline-section">
            <h2 class="timeline-title">Education</h2>
            <div class="timeline-item">
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <h3 class="timeline-item-title">Bachelor in Electrical Computer Engineering</h3>
                <p class="timeline-date">Oct 2018 - 2023</p>
                <p class="timeline-description">
                  Completed my BSc in Electrical and Computer Engineering with a strong background
                  in mathematics and hardware projects. Notable achievement includes building a
                  facial recognition security system for the university.
                </p>
                <div class="timeline-skills">
                  <span class="skill-tag" v-for="skill in educationSkills" :key="skill">{{
                    skill
                  }}</span>
                </div>
              </div>
            </div>
          </section>

          <!-- Experience Section -->
          <section class="timeline-section">
            <h2 class="timeline-title">Experience</h2>
            <div class="timeline-item" v-for="(job, index) in jobs" :key="index">
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <h3 class="timeline-item-title">{{ job.company }}</h3>
                <h4 class="timeline-role">{{ job.role }}</h4>
                <p class="timeline-date">{{ job.dates }}</p>
                <p class="timeline-description">{{ job.description }}</p>
                <div class="timeline-skills">
                  <span class="skill-tag" v-for="skill in job.skills" :key="skill">{{
                    skill
                  }}</span>
                </div>
              </div>
            </div>
          </section>
        </div>

        <!-- Skills Section -->
        <section class="skills-section">
          <h2 class="section-title text-center">Technical Skills</h2>
          <div class="skills-grid">
            <div class="skill-category">
              <h3 class="skill-category-title">Frontend</h3>
              <div class="skill-list">
                <span class="skill-item" v-for="skill in frontendSkills" :key="skill">{{
                  skill
                }}</span>
              </div>
            </div>
            <div class="skill-category">
              <h3 class="skill-category-title">Backend</h3>
              <div class="skill-list">
                <span class="skill-item" v-for="skill in backendSkills" :key="skill">{{
                  skill
                }}</span>
              </div>
            </div>
            <div class="skill-category">
              <h3 class="skill-category-title">Tools & Technologies</h3>
              <div class="skill-list">
                <span class="skill-item" v-for="skill in toolsSkills" :key="skill">{{
                  skill
                }}</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const educationSkills = ref([
  'Data Structures and Algorithms',
  'Java Programming',
  'Embedded Programming',
  'Mathematics',
  'Hardware Design',
])

const jobs = ref([
  {
    company: 'Mesh-info',
    role: 'Developer',
    dates: 'Nov 2023 - Present',
    description:
      'Currently working on enterprise application development, software testing, and DevOps practices. Responsible for API integration and maintaining high-quality software standards.',
    skills: [
      'Software Testing',
      'Enterprise App Development',
      'DevOps',
      'API Integration',
      'Quality Assurance',
    ],
  },
  {
    company: 'Cypher Technology',
    role: 'Full-stack Developer',
    dates: 'Mar 2023 - Oct 2023',
    description:
      'Developed portfolio websites and worked on security-related projects. Gained experience with internationalization (i18n) and security testing tools like Burp Suite.',
    skills: [
      'Portfolio Development',
      'Burp Suite',
      'i18n',
      'Security Testing',
      'Full-stack Development',
    ],
  },
  {
    company: 'Vintage Technology plc',
    role: 'Junior Web Developer',
    dates: 'Oct 2022 - Feb 2023',
    description:
      'Started my professional journey working on a project management system using the MERN stack. Learned developer best practices and gained hands-on experience with modern web technologies.',
    skills: [
      'Project Management System',
      'MERN Stack',
      'Developer Best Practices',
      'React',
      'Node.js',
    ],
  },
])

const frontendSkills = ref([
  'Vue.js',
  'React',
  'TypeScript',
  'JavaScript',
  'HTML5',
  'CSS3',
  'Tailwind CSS',
])

const backendSkills = ref([
  'Node.js',
  'Python',
  'Java',
  'Express.js',
  'MongoDB',
  'PostgreSQL',
  'REST APIs',
  'Soldity',
  'Hedera Hashgraph',
])

const toolsSkills = ref(['Git', 'Docker', 'AWS', 'Linux', 'Burp Suite', 'Jest', 'Webpack', 'Vite'])
</script>

<style scoped>
.about-page {
  background-color: var(--color-background);
}

.about-header {
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

.about-content {
  max-width: 1000px;
  margin: 0 auto;
}

.about-intro {
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 1.5rem;
}

.intro-paragraph {
  font-size: 1.125rem;
  color: var(--color-text-light);
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.timeline-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;
}

.timeline-section {
  position: relative;
}

.timeline-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 2rem;
  position: relative;
}

.timeline-title::after {
  content: '';
  position: absolute;
  bottom: -0.5rem;
  left: 0;
  width: 50px;
  height: 3px;
  background-color: var(--color-primary);
  border-radius: 2px;
}

.timeline-item {
  position: relative;
  padding-left: 2rem;
  margin-bottom: 2.5rem;
  border-left: 2px solid var(--color-border);
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-marker {
  position: absolute;
  left: -8px;
  top: 0;
  width: 14px;
  height: 14px;
  background-color: var(--color-primary);
  border-radius: 50%;
  border: 3px solid var(--color-background);
}

.timeline-content {
  padding-left: 1rem;
}

.timeline-item-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 0.25rem;
}

.timeline-role {
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-primary);
  margin-bottom: 0.5rem;
}

.timeline-date {
  font-size: 0.9rem;
  color: var(--color-text-light);
  margin-bottom: 1rem;
}

.timeline-description {
  color: var(--color-text-light);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.timeline-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  background-color: var(--color-surface);
  color: var(--color-primary);
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
}

.skills-section {
  background-color: var(--color-surface);
  padding: 3rem;
  border-radius: var(--border-radius);
  margin-top: 2rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.skill-category {
  text-align: center;
}

.skill-category-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 1rem;
}

.skill-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
}

.skill-item {
  background-color: var(--color-background);
  color: var(--color-text);
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid var(--color-border);
  transition: var(--transition);
}

.skill-item:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

@media (max-width: 768px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .page-title {
    font-size: 2.5rem;
  }

  .timeline-container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .skills-section {
    padding: 2rem 0rem;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>
