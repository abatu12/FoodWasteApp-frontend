<template>
  <div>
    <!-- Navbar -->
    <header class="navbar">
      <div class="navbar__inner container">
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

    <!-- Hero -->
    <section class="container hero">
      <div class="hero__text">
        <h1 class="hero__title">
          Smarter food sharing<br/>
          for a better tomorrow
        </h1>
        <p class="hero__desc">
          Join our community and reduce waste by sharing your excess food with neighbors.
        </p>
        <router-link to="/register" class="hero__btn">
          Get started
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
      <h2 class="partners__title">Our partners</h2>
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
      <h2 class="features__title">App features that help you reduce food waste</h2>
      <div class="features__grid">
        <div
          v-for="feat in features"
          :key="feat.title"
          class="feature-card"
        >
          <img
            :src="feat.icon"
            :alt="feat.title"
            class="feature-card__icon"
          />
          <h3 class="feature-card__title">{{ feat.title }}</h3>
          <p class="feature-card__desc">{{ feat.description }}</p>
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
      <h2>Helping a local restaurant save 100+ meals a week</h2>
      <p>
        Every week we team up with neighborhood eateries to redistribute surplus dishes
        before they go to waste. With our platform, the restaurant owner simply logs their
        extra meals, and local families can claim them — cutting down food waste and
        spreading goodwill.
      </p>
      <router-link to="/about" class="restaurant__btn">
        Learn More
      </router-link>
    </div>
  </div>
</section>

    <!-- Difference Stats -->
    <section class="stats container">
      <h2 class="features__title text-center mb-8">Together, we’re making a difference</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        <div v-for="stat in stats" :key="stat.label">
          <img :src="stat.icon" :alt="stat.label" class="mx-auto mb-2 h-12" />
          <div class="text-2xl font-bold">{{ stat.value }}</div>
          <div class="text-gray-600">{{ stat.label }}</div>
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
      <p>Every year, millions of tons of food are wasted simply because we forget what we bought, when we bought it, or when it will expire.
Our app’s smart expiry date reminder feature helps users keep track of food items at home. You simply scan or enter your groceries, and the app will send you gentle reminders before the food expires.
It’s a simple idea with powerful results — helping you plan meals better, waste less, and even save money.</p><br>

      <blockquote>
“Since I started using expiry reminders, I’ve cut my food waste in half. It also helps me organize my weekly meals!”</blockquote>
      <p>— Ivana M.</p>
    </div>
  </div>
  <div class="testimonial__logos container">
    <img v-for="logo in partnerLogos" :key="logo.alt" :src="logo.src" :alt="logo.alt" />
  </div>
  <div class="testimonial__cta container">
    <a href="/partners">Meet all customers →</a>
  </div>
</section>

  <!-- CTA Cards -->
  <section class="testimonial-ctas container">
    <div class="container">
    <div class="cta-cards">
      <a href="/listings" class="cta-card">
        <img src="@/assets/icon-listings.svg" alt="Nearby Listings" />
        <h3>Find nearby food listings</h3>
        <span>Explore &rarr;</span>
      </a>
      <a href="/reminders" class="cta-card">
        <img src="@/assets/icon-alerts.svg" alt="Expiry Alerts" />
        <h3>Get expiry date reminders</h3>
        <span>Set reminders &rarr;</span>
      </a>
      <a href="/recipes" class="cta-card">
        <img src="@/assets/icon-recipes.svg" alt="Leftover Recipes" />
        <h3>Use leftover-based recipes</h3>
        <span>Cook smart &rarr;</span>
      </a>
    </div>
  </div>
</section>


    <!-- Footer -->
    <footer class="site-footer">
      <p>&copy; 2025 Food Sharing Project. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import logo1 from '@/assets/logo1.svg'
import logo2 from '@/assets/logo2.svg'
import logo3 from '@/assets/logo3.svg'
import logo4 from '@/assets/logo4.svg'
import logo5 from '@/assets/logo5.svg'

import iconUsers     from '@/assets/icon-users.svg'
import iconSaved     from '@/assets/icon-saved.svg'
import iconAlerts    from '@/assets/icon-alerts.svg'
import iconLocations from '@/assets/icon-locations.svg'

import iconListings  from '@/assets/icon-listings.svg'
import iconShare     from '@/assets/icon-share.svg'
import iconRecipes   from '@/assets/icon-recipes.svg'

const partnerLogos = [
  { src: logo1, alt: 'Partner 1' },
  { src: logo2, alt: 'Partner 2' },
  { src: logo3, alt: 'Partner 3' },
  { src: logo4, alt: 'Partner 4' },
  { src: logo5, alt: 'Partner 5' },
]

const stats = [
  { icon: iconUsers,     value: '2,245,341', label: 'Active Users' },
  { icon: iconSaved,     value: '46,328',   label: 'Meals Saved' },
  { icon: iconAlerts,    value: '828,867',  label: 'Expiry Alerts' },
  { icon: iconLocations, value: '1,926,436',label: 'Shared Locations' },
]

const features = [
  {
    icon: iconListings,
    title: 'Nearby Listings',
    description: 'Find or post listings of available food in your area.',
  },
  {
    icon: iconShare,
    title: 'Set Reminders',
    description: 'Never forget to share before your food expires.',
  },
  {
    icon: iconRecipes,
    title: 'Leftover Recipes',
    description: 'Get inspired by recipes using common leftovers.',
  },
]
</script>

<style scoped>
/* sve potrebno za layout dolazi iz globalnog style.css */
</style>
