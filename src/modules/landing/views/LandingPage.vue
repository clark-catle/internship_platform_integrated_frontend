<script setup lang="ts">
import CTASection from '../components/CTASection.vue'
import FeaturedSection from '../components/FeaturedSection.vue'
import FooterSection from '../components/FooterSection.vue'
import HeaderSection from '../components/HeaderSection.vue'
import NavbarLanding from '../components/NavbarLanding.vue'
import StatSection from '../components/StatSection.vue'
import TestimonialSection from '../components/TestimonialSection.vue'
import WhySection from '../components/WhySection.vue'
</script>

<template>
  <NavbarLanding />

  <div>
    <HeaderSection />
    <StatSection />
    <FeaturedSection />
    <WhySection />
    <TestimonialSection />
    <CTASection />
    <FooterSection />
  </div>
</template>
