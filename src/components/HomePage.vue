<!-- src/views/HomePage.vue -->
<template>
  <div>
    <!-- Navbar -->
    <header class="navbar">
      <div class="navbar__inner container">
        <div class="text-2xl font-bold">{{ t('nav.brand') }}</div>
        <nav>
          <router-link to="/"       class="navbar__link">{{ t('nav.home') }}</router-link>
          <router-link to="/about"  class="navbar__link">{{ t('nav.about') }}</router-link>
          <router-link to="/contact" class="navbar__link">{{ t('nav.contact') }}</router-link>
          <router-link to="/login"   class="navbar__btn">{{ t('nav.login') }}</router-link>
          <router-link to="/register" class="navbar__btn">{{ t('nav.signup') }}</router-link>
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

    <!-- Hero -->
    <section class="container hero">
      <div class="hero__text">
        <h1 class="hero__title">
          {{ t('hero.titleLine1') }}<br/>
          {{ t('hero.titleLine2') }}
        </h1>
        <p class="hero__desc">
          {{ t('hero.desc') }}
        </p>
        <router-link to="/register" class="hero__btn">
          {{ t('hero.button') }}
        </router-link>
      </div>
      <div class="hero__img">
        <img
          src="@/assets/illustrations/illustration-hero.svg"
          alt="Hero illustration"
        />
      </div>
    </section>

    <!-- Partners -->
    <section class="partners">
      <h2 class="partners__title">{{ t('partners.title') }}</h2>
      <div class="partners__list">
        <img
          v-for="logo in partnerLogos"
          :key="logo.alt"
          :src="logo.src"
          :alt="logo.alt"
          class="partners__logo"
        />
      </div>
    </section>

    <!-- Features -->
    <section class="features">
      <h2 class="features__title">{{ t('features.title') }}</h2>
      <div class="features__grid">
        <div
          v-for="feat in features"
          :key="feat.key"
          class="feature-card"
        >
          <img
            :src="feat.icon"
            :alt="t(`features.${feat.key}.title`)"
            class="feature-card__icon"
          />
          <h3 class="feature-card__title">{{ t(`features.${feat.key}.title`) }}</h3>
          <p class="feature-card__desc">{{ t(`features.${feat.key}.desc`) }}</p>
        </div>
      </div>
    </section>

    <!-- Restaurant Story -->
    <section class="restaurant">
      <div class="restaurant__inner container">
        <div class="restaurant__img">
          <img
            src="@/assets/illustrations/illustration-restaurant.svg"
            alt="Helping restaurant"
          />
        </div>
        <div class="restaurant__text">
          <h2>{{ t('restaurant.title') }}</h2>
          <p>{{ t('restaurant.desc') }}</p>
          <router-link to="/about" class="restaurant__btn">
            {{ t('restaurant.button') }}
          </router-link>
        </div>
      </div>
    </section>

    <!-- Difference Stats -->
    <section class="stats container">
      <h2 class="features__title text-center mb-8">{{ t('stats.title') }}</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        <div v-for="stat in stats" :key="stat.key">
          <img :src="stat.icon" :alt="t(`stats.${stat.key}.label`)" class="mx-auto mb-2 h-12" />
          <div class="text-2xl font-bold">{{ stat.value }}</div>
          <div class="text-gray-600">{{ t(`stats.${stat.key}.label`) }}</div>
        </div>
      </div>
    </section>

    <!-- Testimonial & Logos -->
    <section class="testimonial">
      <div class="testimonial__inner container">
        <div class="testimonial__img">
          <img src="@/assets/illustrations/illustration-fridge.svg" alt="Full fridge" />
        </div>
        <div class="testimonial__text">
          <p>{{ t('testimonial.text') }}</p><br/>
          <blockquote>{{ t('testimonial.quote') }}</blockquote>
          <p>{{ t('testimonial.author') }}</p>
        </div>
      </div>
      <div class="testimonial__logos container">
        <img
          v-for="logo in partnerLogos"
          :key="logo.alt"
          :src="logo.src"
          :alt="logo.alt"
        />
      </div>
      <div class="testimonial__cta container">
        <router-link to="/partners">{{ t('testimonial.cta') }}</router-link>
      </div>
    </section>

    <!-- CTA Cards -->
    <section class="testimonial-ctas container">
      <div class="container">
        <div class="cta-cards">
          <router-link :to="{ name: 'ListingsList' }" class="cta-card">
            <img src="@/assets/icon-listings.svg" alt="Listings" />
            <h3>{{ t('features.listings.title') }}</h3>
            <span>{{ t('cta.listings') }}</span>
          </router-link>

          <router-link to="/reminders" class="cta-card">
            <img src="@/assets/icon-alerts.svg" alt="Alerts" />
            <h3>{{ t('features.reminders.title') }}</h3>
            <span>{{ t('cta.alerts') }}</span>
          </router-link>

          <router-link to="/recipes" class="cta-card">
            <img src="@/assets/icon-recipes.svg" alt="Recipes" />
            <h3>{{ t('features.recipes.title') }}</h3>
            <span>{{ t('cta.recipes') }}</span>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="site-footer">
      <p>{{ t('footer.copyright', { year: new Date().getFullYear() }) }}</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n({ useScope: 'global' })

import logo1 from '@/assets/logo1.svg'
import logo2 from '@/assets/logo2.svg'
import logo3 from '@/assets/logo3.svg'
import logo4 from '@/assets/logo4.svg'
import logo5 from '@/assets/logo5.svg'

import iconListings  from '@/assets/icon-listings.svg'
import iconReminders from '@/assets/icon-alerts.svg'
import iconRecipes   from '@/assets/icon-recipes.svg'

import iconUsers     from '@/assets/icon-users.svg'
import iconSaved     from '@/assets/icon-saved.svg'
import iconAlerts    from '@/assets/icon-alerts.svg'
import iconLocations from '@/assets/icon-locations.svg'

const partnerLogos = [
  { src: logo1, alt: 'Partner 1' },
  { src: logo2, alt: 'Partner 2' },
  { src: logo3, alt: 'Partner 3' },
  { src: logo4, alt: 'Partner 4' },
  { src: logo5, alt: 'Partner 5' },
]

const features = [
  { key: 'listings', icon: iconListings },
  { key: 'reminders', icon: iconReminders },
  { key: 'recipes',   icon: iconRecipes },
]

const stats = [
  { key: 'users',     icon: iconUsers,     value: '2,245,341' },
  { key: 'meals',     icon: iconSaved,     value: '46,328'   },
  { key: 'alerts',    icon: iconAlerts,    value: '828,867'  },
  { key: 'locations', icon: iconLocations, value: '1,926,436' }
]
</script>

<style scoped>
/* your global layout/CSS remains in style.css; no changes needed here */
</style>
