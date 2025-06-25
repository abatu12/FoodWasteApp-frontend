<template>
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
  <div>
    <!-- Hero section -->
    <section class="about-hero">
      <div class="container">
        <h1>About Us</h1>
        <p>
          FoodWasteApp is dedicated to reducing food waste, connecting communities,
          and preserving our planet. Together we can make a difference—
          meal by meal, moment by moment.
        </p>
      </div>
    </section>

    <!-- Mission -->
    <section class="about-mission container">
      <h2>Our Mission</h2>
      <p>
        Our mission is to leverage technology and community spirit to curb food waste.
        We connect those with surplus food to those in need, raise awareness about
        sustainability, and support local sharing initiatives.
      </p>
    </section>

    <!-- How we help the planet -->
    <section class="about-cards container">
      <h2 class="text-center" style="font-size:2rem; font-weight:700; margin-bottom:1.5rem;">
        How We Help the Planet
      </h2>
      <div class="card-list">
        <div class="about-card">
          <img src="@/assets/icon-listings.svg" alt="Reduce Waste">
          <h3>Reduce Waste</h3>
          <p>
            We match surplus food with those who need it, preventing edible items from
            ending up in landfills and protecting our environment.
          </p>
        </div>
        <div class="about-card">
          <img src="@/assets/icon-share.svg" alt="Strengthen Community">
          <h3>Strengthen Community</h3>
          <p>
            By fostering neighborhood food exchanges, we build stronger local bonds
            and promote mutual support.
          </p>
        </div>
        <div class="about-card">
          <img src="@/assets/icon-recipes.svg" alt="Sustainable Education">
          <h3>Sustainable Education</h3>
          <p>
            We provide recipes and tips for using leftovers, reducing the need for
            new production and lowering carbon footprints.
          </p>
        </div>
      </div>
    </section>

    <!-- Impact statistics -->
    <section class="about-stats container">
      <h2 class="text-center" style="font-size:2rem; font-weight:700; margin-bottom:1.5rem;">
        Our Impact in Numbers
      </h2>
      <div class="stats-grid">
        <div class="about-stat">
          <span class="about-stat-value">2,345,678</span>
          <span class="about-stat-label">Meals Shared</span>
        </div>
        <div class="about-stat">
          <span class="about-stat-value">123,456 kg</span>
          <span class="about-stat-label">Food Saved</span>
        </div>
        <div class="about-stat">
          <span class="about-stat-value">4,567</span>
          <span class="about-stat-label">Active Users</span>
        </div>
      </div>
    </section>

    <!-- Call to action -->
    <section class="about-cta">
      <div class="container">
        <h2>Join Us Today!</h2>
        <router-link to="/register">Sign Up Now</router-link>
      </div>
    </section>
  </div>
</template>


<script setup lang="ts">
// No additionl logic needed for nowa
</script>

<style scoped>
/* Add any page-specific overrides here if necessary */
</style>
