<script setup lang="ts">
import ButtonBase from '@/shared/components/ButtonBase.vue'
</script>

<template>
  <section class="py-20" id="cta">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div class="relative gradient-hero rounded-3xl p-12 sm:p-16 overflow-hidden">
        <div class="absolute inset-0 opacity-20">
          <div class="absolute top-0 right-0 w-64 h-64 rounded-full bg-white blur-3xl" />
          <div class="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white blur-3xl" />
        </div>
        <div class="relative">
          <h2 class="font-poppins font-bold text-3xl sm:text-4xl text-white mb-4">
            Ready to Start Your Career Journey?
          </h2>
          <p class="text-white/80 text-lg mb-8">
            Join 50,000+ students who found their internship on InternMatch
          </p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <RouterLink to="/">
              <ButtonBase
                class="bg-white text-primary! hover:bg-white/90 rounded-xl px-8 py-3 font-semibold shadow-lg"
              >
                Get Started — It's Free
              </ButtonBase>
            </RouterLink>

            <RouterLink to="/">
              <ButtonBase
                variant="outline"
                class="border-white/40 text-white! hover:bg-white/10 rounded-xl px-8 py-3"
              >
                Post Internships
              </ButtonBase>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
