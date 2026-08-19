<script setup lang="ts">
import { onMounted, ref } from 'vue'

const typedPrefix = ref('')
const typedTerm = ref('')
const projectTrack = ref<HTMLElement | null>(null)
const headlinePrefix = 'Software for the '
const headlineTerm = 'real world.'

onMounted(() => {
  let index = 0
  const typeNext = () => {
    if (index <= headlinePrefix.length) {
      typedPrefix.value = headlinePrefix.slice(0, index)
    } else {
      typedTerm.value = headlineTerm.slice(0, index - headlinePrefix.length)
    }
    index += 1
    if (index <= headlinePrefix.length + headlineTerm.length) window.setTimeout(typeNext, 48)
  }
  typeNext()
})

function scrollProjects() {
  projectTrack.value?.scrollBy({ left: 420, behavior: 'smooth' })
}

const skills = {
  Backend: ['Java', 'Spring Boot', 'Python', 'FastAPI', 'Spring Cloud'],
  Frontend: ['Vue.js', 'TypeScript', 'Responsive UI'],
  AI: ['AI integration', 'RAG systems', 'Knowledge bases'],
  DevOps: ['Docker', 'PostgreSQL', 'MongoDB', 'Redis', 'Kafka', 'Nacos'],
  Blockchain: ['Solidity', 'Smart contracts', 'Web3 foundations'],
}
</script>

<template>
  <div class="portfolio-shell">
    <header class="site-header reveal reveal-delay-1">
      <a class="wordmark" href="#top" aria-label="Kirubel Aynalem home">Kirubel Aynalem</a>
      <nav aria-label="Primary navigation"><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a></nav>
      <a class="availability" href="#contact"><span></span>Open to good problems</a>
    </header>

    <main id="top">
      <section class="hero section-wrap">
        <div class="hero-copy reveal reveal-delay-2">
          <p class="eyebrow">Full stack software engineer <span>/</span> Addis Ababa, Ethiopia</p>
          <h1 class="typed-headline"><span>{{ typedPrefix }}</span><em>{{ typedTerm }}</em><span class="typing-cursor" aria-hidden="true"></span></h1>
          <p class="hero-summary">I build enterprise systems and early products across Africa and Asia, from dependable backend services to thoughtful interfaces.</p>
          <div class="hero-links"><a class="button button-primary" href="https://github.com/KirubelAynalem" target="_blank" rel="noreferrer">GitHub <span>↗</span></a><a class="button button-quiet" href="https://www.linkedin.com/in/kirubel-aynalem/" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a></div>
        </div>
        <aside class="hero-role reveal reveal-delay-3"><span class="role-kicker">Current role</span><strong>Software Engineer</strong><p>Comfura Software Development PLC</p><div class="role-rule"></div><span>Enterprise systems & product engineering</span><span>Addis Ababa, Ethiopia</span></aside>
      </section>

      <section class="proof-band reveal"><div><strong>15K+</strong><span>PEOPLE USE<br />OUR APP</span></div><div><strong>Enterprise</strong><span>production delivery</span></div><div><strong>2020—now</strong><span>building with intent</span></div><div><strong>11</strong><span>product in public</span></div></section>

      <section id="about" class="section-wrap about-section"><div class="section-label reveal"><span>01</span>About</div><div class="about-content"><h2 class="reveal">Electrical engineering<br />taught me to think in systems.</h2><div class="reveal reveal-delay-1"><p>I studied Computer and Electrical Engineering, then discovered how much I enjoyed turning ideas into useful software while I was an undergraduate.</p><p>That curiosity became a practice: learn deeply, build carefully, and keep making things that create real value for people.</p></div></div></section>

      <section id="work" class="work-section">
        <div class="section-wrap work-heading"><div class="section-label reveal"><span>02</span>Selected work</div><button class="scroll-projects" type="button" @click="scrollProjects">Scroll projects <span>→</span></button></div>
        <div ref="projectTrack" class="work-track">
          <article class="work-feature reveal"><div class="work-index">01 / Enterprise</div><div class="work-main"><h2>TeleConnect<span>+</span></h2><p>SCW platform for Ethio Telecom</p></div><div class="work-detail"><p>Production enterprise software for one of Ethiopia's most important communications companies.</p><ul><li>Designed and shipped production services</li><li>Used by 15,000+ employees</li><li>Built for a high-volume telecom environment</li></ul></div></article>
          <article class="work-feature bridgeos reveal"><div class="work-index">02 / Building in public</div><div class="work-main"><h2>Bridge<span>OS</span></h2><p>Cross-cultural team collaboration</p><a class="text-link" href="https://github.com/KirubelAynalem" target="_blank" rel="noreferrer">View on GitHub <span>↗</span></a></div><div class="work-detail"><p>A collaboration platform for distributed teams working across borders, time zones, and working cultures. A product I am building toward ownership.</p><div class="tech-line">Spring Boot · Vue.js · Python · PostgreSQL · Docker</div><p class="build-note">Building in public every Friday on LinkedIn.</p></div></article>
          <article class="work-feature reveal"><div class="work-index">03 / Enterprise</div><div class="work-main"><h2>Document<br />Management</h2><p>Secure document workflows</p></div><div class="work-detail"><p>Enterprise document storage, retrieval, versioning, and collaboration built with security and reliable access control in mind.</p><div class="tech-line">Java · Spring Boot · PostgreSQL</div></div></article>
          <article class="work-feature reveal"><div class="work-index">04 / Research</div><div class="work-main"><h2>Knowledge<br />Base AI</h2><p>Enterprise intelligence</p></div><div class="work-detail"><p>A domain-focused AI system exploring RAG, knowledge retrieval, and intelligent assistance for real organizational contexts.</p><div class="tech-line">Python · AI/RAG · NLP · LLM integration</div></div></article>
          <article class="work-feature reveal"><div class="work-index">05 / Product</div><div class="work-main"><h2>Enterprise<br />Communication</h2><p>Internal team collaboration</p></div><div class="work-detail"><p>Communication workflows for teams: messaging, file sharing, and project-specific collaboration in one enterprise environment.</p><div class="tech-line">WebSockets · Node.js · Real-time systems</div></div></article>
        </div>
      </section>

      <section class="section-wrap skills-section"><div class="section-label reveal"><span>03</span>Technical range</div><div class="skills-grid"><div v-for="(items, category) in skills" :key="category" class="skill-group reveal"><h3>{{ category }}</h3><span v-for="skill in items" :key="skill">{{ skill }}</span></div></div></section>
      <section class="section-wrap presence-section"><div class="section-label reveal"><span>04</span>Presence</div><div class="presence-content"><h2 class="reveal">Keep learning.<br />Keep building.<br />Keep moving.</h2><div class="reveal reveal-delay-1"><p>I share ideas, lessons, and small observations from a life spent learning technology and building with intention.</p><div class="presence-links"><a href="https://t.me/selahchannel" target="_blank" rel="noreferrer">Selah on Telegram <span>↗</span></a><a href="https://www.linkedin.com/in/kirubel-aynalem/" target="_blank" rel="noreferrer">LinkedIn build logs <span>↗</span></a></div></div></div></section>
      <section id="contact" class="contact-section"><div class="section-wrap reveal"><p class="eyebrow">05 / Contact</p><h2>Have a real problem<br />worth building for?</h2><a class="contact-email" href="mailto:kirubel.aynalem@gmail.com">kirubel.aynalem@gmail.com <span>↗</span></a><p class="contact-note">Open to thoughtful conversations about products, systems, and the future of African technology.</p></div></section>
    </main>
    <footer class="site-footer section-wrap"><span>Kirubel Aynalem / 2026</span><span>Built from Addis Ababa</span><a href="#top">Back to top ↑</a></footer>
  </div>
</template>
