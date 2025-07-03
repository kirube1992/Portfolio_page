<template>
  <div class="contact-page">
    <div class="container section-spacing">
      <div class="contact-header">
        <h1 class="page-title">Get In Touch</h1>
        <p class="page-subtitle">
          Feel free to contact me by submitting the form below and I will get back to you as soon as
          possible
        </p>
      </div>

      <div class="contact-content">
        <div class="contact-info">
          <h2 class="contact-info-title">Let's Connect</h2>
          <p class="contact-info-text">
            I'm always interested in discussing new opportunities, innovative projects, or just
            having a conversation about technology and software development.
          </p>

          <div class="contact-methods">
            <div class="contact-method">
              <div class="contact-icon">📧</div>
              <div class="contact-details">
                <h3>Email</h3>
                <p>kirubel.aynalem@example.com</p>
              </div>
            </div>

            <div class="contact-method">
              <div class="contact-icon">📱</div>
              <div class="contact-details">
                <h3>Phone</h3>
                <p>+251 932 3638 202</p>
              </div>
            </div>

            <div class="contact-method">
              <div class="contact-icon">📍</div>
              <div class="contact-details">
                <h3>Location</h3>
                <p>Addis Ababa, Ethiopia</p>
              </div>
            </div>
          </div>
        </div>

        <div class="contact-form-container">
          <ContactForm />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ContactForm from '@/components/ContactForm.vue'
</script>

<style scoped>
.contact-page {
  background-color: var(--color-background);
}

.contact-header {
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

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 1000px;
  margin: 0 auto;
}

.contact-info-title {
  font-size: 2rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 1rem;
}

.contact-info-text {
  color: var(--color-text-light);
  line-height: 1.6;
  margin-bottom: 2rem;
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact-method {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background-color: var(--color-surface);
  border-radius: var(--border-radius);
  transition: var(--transition);
}

.contact-method:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.contact-icon {
  font-size: 1.5rem;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-primary);
  border-radius: 50%;
}

.contact-details h3 {
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 0.25rem;
}

.contact-details p {
  color: var(--color-text-light);
  font-size: 0.9rem;
}

.contact-form-container {
  background-color: var(--color-surface);
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-md);
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2.5rem;
  }

  .contact-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .contact-form-container {
    padding: 1.5rem;
  }
}
</style>
