<template>
  <div>
    <header class="navbar">
      <div class="navbar__inner">
        <div class="text-2xl font-bold">FoodWasteApp</div>
        <nav>
          <router-link to="/"       class="navbar__link">Home</router-link>
          <router-link to="/about"  class="navbar__link">About</router-link>
          <router-link to="/contact" class="navbar__link">Contact</router-link>
          <router-link to="/login"   class="navbar__btn">Login</router-link>
          <router-link to="/register" class="navbar__btn">Sign Up</router-link>
        </nav>
      </div>
    </header>
    <!-- Hero section -->
    <section class="contact-hero">
      <div class="container">
        <h1>Contact Us</h1>
        <p>Have a question or suggestion? We’d love to hear from you.</p>
      </div>
    </section>

    <!-- Contact info -->
    <section class="contact-info container">
      <h2>Get in Touch</h2>
      <ul class="contact-list">
        <li><strong>Email:</strong> support@foodwasteapp.example.com</li>
        <li><strong>Phone:</strong> +1 (234) 567-8901</li>
        <li><strong>Address:</strong> 123 Food St, Sustainability City, Earth</li>
      </ul>
    </section>

    <!-- Message form -->
    <section class="contact-form-section container">
      <h2>Send Us a Message</h2>
      <form class="contact-form" @submit.prevent>
        <input
          type="text"
          placeholder="Your Name"
          class="contact-field"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          class="contact-field"
          required
        />
        <textarea
          placeholder="Your Message"
          class="contact-field contact-textarea"
          required
        ></textarea>
        <button type="submit" class="contact-btn">
          Send Message
        </button>
      </form>
    </section>
  </div>
</template>

<script setup lang="ts">
// For now no handling logic—just static form
</script>

<style scoped>
/* all styling lives in global style.css */
</style>
