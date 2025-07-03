<template>
  <form @submit.prevent="handleSubmit" class="contact-form" novalidate>
    <div class="form-group">
      <label for="name" class="form-label">
        Name <span class="required" aria-label="required">*</span>
      </label>
      <input
        id="name"
        v-model="form.name"
        type="text"
        class="form-input"
        :class="{ error: errors.name }"
        required
        aria-describedby="name-error"
        @blur="validateField('name')"
      />
      <span v-if="errors.name" id="name-error" class="error-message" role="alert">
        {{ errors.name }}
      </span>
    </div>

    <div class="form-group">
      <label for="email" class="form-label">
        Email <span class="required" aria-label="required">*</span>
      </label>
      <input
        id="email"
        v-model="form.email"
        type="email"
        class="form-input"
        :class="{ error: errors.email }"
        required
        aria-describedby="email-error"
        @blur="validateField('email')"
      />
      <span v-if="errors.email" id="email-error" class="error-message" role="alert">
        {{ errors.email }}
      </span>
    </div>

    <div class="form-group">
      <label for="subject" class="form-label">Subject</label>
      <input
        id="subject"
        v-model="form.subject"
        type="text"
        class="form-input"
        aria-describedby="subject-help"
      />
      <span id="subject-help" class="form-help"> Optional: Brief description of your inquiry </span>
    </div>

    <div class="form-group">
      <label for="message" class="form-label">
        Message <span class="required" aria-label="required">*</span>
      </label>
      <textarea
        id="message"
        v-model="form.message"
        rows="5"
        class="form-textarea"
        :class="{ error: errors.message }"
        required
        aria-describedby="message-error"
        @blur="validateField('message')"
      ></textarea>
      <span v-if="errors.message" id="message-error" class="error-message" role="alert">
        {{ errors.message }}
      </span>
    </div>

    <button
      type="submit"
      class="submit-button"
      :disabled="isSubmitting"
      :aria-label="isSubmitting ? 'Sending message...' : 'Send message'"
    >
      <span v-if="isSubmitting" class="loading-spinner" aria-hidden="true"></span>
      {{ isSubmitting ? 'Sending...' : 'Send Message' }}
    </button>

    <div v-if="submitStatus" class="submit-status" :class="submitStatus.type" role="alert">
      {{ submitStatus.message }}
    </div>
  </form>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

interface SubmitStatus {
  type: 'success' | 'error'
  message: string
}

const form = reactive<FormData>({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const errors = reactive<FormErrors>({})
const isSubmitting = ref(false)
const submitStatus = ref<SubmitStatus | null>(null)

function validateField(field: keyof FormErrors) {
  // Clear previous error
  delete errors[field]

  switch (field) {
    case 'name':
      if (!form.name.trim()) {
        errors.name = 'Name is required'
      } else if (form.name.trim().length < 2) {
        errors.name = 'Name must be at least 2 characters'
      }
      break

    case 'email':
      if (!form.email.trim()) {
        errors.email = 'Email is required'
      } else if (!isValidEmail(form.email)) {
        errors.email = 'Please enter a valid email address'
      }
      break

    case 'message':
      if (!form.message.trim()) {
        errors.message = 'Message is required'
      } else if (form.message.trim().length < 10) {
        errors.message = 'Message must be at least 10 characters'
      }
      break
  }
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function validateForm(): boolean {
  validateField('name')
  validateField('email')
  validateField('message')

  return Object.keys(errors).length === 0
}

async function handleSubmit() {
  // Clear previous status
  submitStatus.value = null

  // Validate form
  if (!validateForm()) {
    submitStatus.value = {
      type: 'error',
      message: 'Please fix the errors above and try again.',
    }
    return
  }

  isSubmitting.value = true

  try {
    // Simulate API call - replace with actual form submission
    await submitForm()

    submitStatus.value = {
      type: 'success',
      message: 'Thank you for your message! I will get back to you soon.',
    }

    // Clear form on success
    resetForm()
  } catch (error) {
    submitStatus.value = {
      type: 'error',
      message: 'Sorry, there was an error sending your message. Please try again.',
    }
  } finally {
    isSubmitting.value = false

    // Clear status after 5 seconds
    setTimeout(() => {
      submitStatus.value = null
    }, 5000)
  }
}

async function submitForm(): Promise<void> {
  const response = await fetch('https://formspree.io/f/mldnvlal', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(form),
  })

  if (!response.ok) {
    throw new Error('Failed to submit form')
  }
}

function resetForm() {
  form.name = ''
  form.email = ''
  form.subject = ''
  form.message = ''
  Object.keys(errors).forEach((key) => delete errors[key as keyof FormErrors])
}
</script>

<style scoped>
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-label {
  font-weight: 600;
  color: var(--color-text);
  font-size: 0.9rem;
}

.required {
  color: var(--color-error);
}

.form-input,
.form-textarea {
  padding: 0.75rem;
  border: 2px solid var(--color-border);
  border-radius: var(--border-radius);
  font-size: 1rem;
  transition: var(--transition);
  background-color: var(--color-background);
  color: var(--color-text);
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.form-input.error,
.form-textarea.error {
  border-color: var(--color-error);
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.form-help {
  font-size: 0.875rem;
  color: var(--color-text-light);
}

.error-message {
  font-size: 0.875rem;
  color: var(--color-error);
  font-weight: 500;
}

.submit-button {
  background-color: var(--color-primary);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: var(--border-radius);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  min-height: 50px;
}

.submit-button:hover:not(:disabled) {
  background-color: var(--color-primary-dark);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.submit-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

.loading-spinner {
  width: 16px;
  height: 16px;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.submit-status {
  padding: 1rem;
  border-radius: var(--border-radius);
  font-weight: 500;
  text-align: center;
}

.submit-status.success {
  background-color: rgba(16, 185, 129, 0.1);
  color: var(--color-success);
  border: 1px solid var(--color-success);
}

.submit-status.error {
  background-color: rgba(239, 68, 68, 0.1);
  color: var(--color-error);
  border: 1px solid var(--color-error);
}

@media (max-width: 768px) {
  .contact-form {
    gap: 1rem;
  }

  .submit-button {
    padding: 0.875rem 1.5rem;
  }
}
</style>
