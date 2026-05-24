<script setup lang="ts">
import CTASection from '../component/CTASection.vue'
import FeaturedSection from '../component/FeaturedSection.vue'
import FooterSection from '../component/FooterSection.vue'
import HeaderSection from '../component/HeaderSection.vue'
import NavbarLanding from '../component/NavbarLanding.vue'
import StatSection from '../component/StatSection.vue'
import TestimonialSection from '../component/TestimonialSection.vue'
import WhySection from '../component/WhySection.vue'
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
