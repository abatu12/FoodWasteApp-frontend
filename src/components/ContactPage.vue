<template>
  <header class="navbar">
    <div class="navbar__inner container">
      <div class="text-2xl font-bold">{{ t('nav.brand') }}</div>
      <nav>
        <router-link to="/"        class="navbar__link">{{ t('nav.home') }}</router-link>
        <router-link to="/about"   class="navbar__link">{{ t('nav.about') }}</router-link>
        <router-link to="/contact" class="navbar__link">{{ t('nav.contact') }}</router-link>
        <router-link to="/login"   class="navbar__btn">{{ t('nav.login') }}</router-link>
        <router-link to="/register"class="navbar__btn">{{ t('nav.signup') }}</router-link>
      </nav>
      <div class="lang-switch">
          <label>{{ t('lang.label') }}:</label>
          <button
            class="lang-btn"
            :class="{ active: locale === 'en' }"
            @click="locale = 'en'"
          >EN</button>
          <button
            class="lang-btn"
            :class="{ active: locale === 'hr' }"
            @click="locale = 'hr'"
          >HR</button>
        </div>
    </div>
  </header>

  <section class="contact-hero">
    <div class="container">
      <h1>{{ t('contact.hero.title') }}</h1>
      <p>{{ t('contact.hero.desc') }}</p>
    </div>
  </section>

  <section class="contact-info container">
    <h2>{{ t('contact.info.title') }}</h2>
    <ul class="contact-list">
      <li>
        <strong>{{ t('contact.info.email') }}:</strong>
        {{ t('contact.info.emailVal') }}
      </li>
      <li>
        <strong>{{ t('contact.info.phone') }}:</strong>
        {{ t('contact.info.phoneVal') }}
      </li>
      <li>
        <strong>{{ t('contact.info.address') }}:</strong>
        {{ t('contact.info.addressVal') }}
      </li>
    </ul>
  </section>

  <section class="contact-form-section container">
    <h2>{{ t('contact.form.title') }}</h2>
    <form class="contact-form" @submit.prevent>
      <input
        type="text"
        :placeholder="t('contact.form.namePlaceholder')"
        class="contact-field"
        required
      />
      <input
        type="email"
        :placeholder="t('contact.form.emailPlaceholder')"
        class="contact-field"
        required
      />
      <textarea
        :placeholder="t('contact.form.messagePlaceholder')"
        class="contact-field contact-textarea"
        required
      ></textarea>
      <button type="submit" class="contact-btn">
        {{ t('contact.form.submit') }}
      </button>
    </form>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n({ useScope: 'global' })
</script>

<style scoped>
/* any page‐specific overrides here */
</style>
