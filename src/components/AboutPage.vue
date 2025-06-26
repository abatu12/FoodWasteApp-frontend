
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

  <section class="about-hero">
    <div class="container">
      <h1>{{ t('about.hero.title') }}</h1>
      <p>{{ t('about.hero.desc') }}</p>
    </div>
  </section>

  <section class="about-mission container">
    <h2>{{ t('about.mission.title') }}</h2>
    <p>{{ t('about.mission.desc') }}</p>
  </section>

  <section class="about-cards container">
    <h2
      class="text-center"
      style="font-size:2rem; font-weight:700; margin-bottom:1.5rem;"
    >
      {{ t('about.cardsTitle') }}
    </h2>
    <div class="card-list">
      <div
        class="about-card"
        v-for="key in cardKeys"
        :key="key"
      >
        <img
          :src="icons[key]"
          :alt="t(`about.cards.${key}.title`)"
        />
        <h3>{{ t(`about.cards.${key}.title`) }}</h3>
        <p>{{ t(`about.cards.${key}.desc`) }}</p>
      </div>
    </div>
  </section>

  <section class="about-stats container">
    <h2
      class="text-center"
      style="font-size:2rem; font-weight:700; margin-bottom:1.5rem;"
    >
      {{ t('about.statsTitle') }}
    </h2>
    <div class="stats-grid">
      <div
        class="about-stat"
        v-for="key in statKeys"
        :key="key"
      >
        <span class="about-stat-value">{{ t(`about.stats.${key}.value`) }}</span>
        <span class="about-stat-label">{{ t(`about.stats.${key}.label`) }}</span>
      </div>
    </div>
  </section>

  <section class="about-cta">
    <div class="container">
      <h2>{{ t('about.cta.title') }}</h2>
      <router-link to="/register">{{ t('about.cta.button') }}</router-link>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n({ useScope: 'global' })

const cardKeys = ['reduce','community','education'] as const
type CardKey = typeof cardKeys[number]

import iconListings  from '@/assets/icon-listings.svg'
import iconShare     from '@/assets/icon-share.svg'
import iconRecipes   from '@/assets/icon-recipes.svg'

const icons: Record<CardKey,string> = {
  reduce:    iconListings,
  community: iconShare,
  education: iconRecipes
}

// 3) Stats keys
const statKeys = ['shared','saved','users'] as const
type StatKey = typeof statKeys[number]
</script>

<style scoped>
/* any overrides here */
</style>
