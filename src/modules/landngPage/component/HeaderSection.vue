<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { ZapIcon, SearchIcon, CheckCircleIcon } from '@lucide/vue'

const router = useRouter()
const query = ref('')

const popularTags = ['Software Engineering', 'Product Design', 'Data Science', 'Marketing']

function handleSearch() {
  if (query.value.trim()) {
    router.push(`/internships?q=${encodeURIComponent(query.value.trim())}`)
  }
}
</script>

<template>
  <section class="relative pt-24 pb-20 overflow-hidden" id="hero">
    <!-- BG Decoration -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        class="absolute -top-40 -right-40 w-150 h-150 rounded-full opacity-10 gradient-primary blur-3xl"
      />
      <div
        class="absolute -bottom-20 -left-40 w-125 h-125 rounded-full bg-violet-500 opacity-10 blur-3xl"
      />
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 rounded-full border border-indigo-500/5"
      />
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full border border-indigo-500/5"
      />
    </div>

    <div class="relative px-4 sm:px-6 lg:px-8">
      <div class="text-center mx-auto">
        <Transition
          appear
          enter-active-class="transition-all duration-500 ease-out"
          enter-from-class="opacity-0 translate-y-5"
          enter-to-class="opacity-100 translate-y-0"
        >
          <span
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/20 text-primary text-sm mb-8"
          >
            <ZapIcon class="w-4 h-4" />
            AI-Powered Internship Matching
            <span class="text-muted-foreground">— Just launched!</span>
          </span>
        </Transition>

        <Transition
          appear
          enter-active-class="transition-all duration-500 ease-out delay-100"
          enter-from-class="opacity-0 translate-y-5"
          enter-to-class="opacity-100 translate-y-0"
        >
          <h1 class="font-bold text-5xl sm:text-6xl lg:text-7xl hero-heading leading-[1.1] mb-6">
            Land Your Dream<br />
            <span class="text-gradient">Internship</span> Today
          </h1>
        </Transition>

        <Transition
          appear
          enter-active-class="transition-all duration-500 ease-out delay-200"
          enter-from-class="opacity-0 translate-y-5"
          enter-to-class="opacity-100 translate-y-0"
        >
          <p
            class="text-lg sm:text-xl text-muted-foreground! mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Connect with 3,500+ verified companies. Get matched to internships that align with your
            skills, interests, and career goals.
          </p>
        </Transition>

        <Transition
          appear
          enter-active-class="transition-all duration-500 ease-out delay-300"
          enter-from-class="opacity-0 translate-y-5"
          enter-to-class="opacity-100 translate-y-0"
        >
          <div class="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto mb-8">
            <div class="relative flex-1">
              <SearchIcon
                class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground"
              />
              <input
                v-model="query"
                type="text"
                placeholder="Search internships, skills, companies..."
                class="search-input w-full pl-12 pr-4 py-4 text-base rounded-2xl border focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                @keydown.enter="handleSearch"
              />
            </div>
            <button
              class="gradient-primary text-white border-0 rounded-2xl px-8 py-4 text-base font-semibold hover:opacity-90 shadow-glow transition-opacity"
              @click="handleSearch"
            >
              Find Internships
            </button>
          </div>
        </Transition>

        <Transition
          appear
          enter-active-class="transition-opacity duration-500 delay-[400ms]"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
        >
          <div
            class="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground"
          >
            <span>Popular:</span>
            <RouterLink
              v-for="tag in popularTags"
              :key="tag"
              :to="`/internships?q=${encodeURIComponent(tag)}`"
              class="px-3 py-1 rounded-full bg-accent text-accent-foreground hover:bg-primary hover:text-white transition-all duration-200 text-xs font-medium"
            >
              {{ tag }}
            </RouterLink>
          </div>
        </Transition>
      </div>

      <Transition
        appear
        enter-active-class="transition-all duration-600 ease-out delay-500"
        enter-from-class="opacity-0 translate-y-10"
        enter-to-class="opacity-100 translate-y-0"
      >
        <div class="mt-16 relative">
          <div class="relative max-w-7xl mx-auto">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80"
              alt="Students working"
              class="w-full rounded-3xl shadow-glow object-cover h-72 sm:h-120 opacity-90 dark:opacity-70"
            />
            <div class="hero-overlay absolute inset-0 rounded-3xl" />

            <div
              class="absolute top-6 left-6 bg-card/90 backdrop-blur-xl rounded-2xl p-4 shadow-glass border border-border hidden sm:block animate-float-up"
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center text-white font-bold text-sm"
                >
                  G
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">Google</p>
                  <p className="text-xs text-muted-foreground">Software Intern</p>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="badge-success text-xs px-2 py-0.5 rounded-full font-medium"
                  >Remote</span
                >
                <span className="text-xs text-muted-foreground">$8,000/mo</span>
              </div>
            </div>

            <div
              class="absolute bottom-6 right-6 bg-card/90 backdrop-blur-xl rounded-2xl p-4 shadow-glass border border-border hidden sm:block animate-float-down"
            >
              <div class="flex items-center gap-2 mb-2">
                <CheckCircleIcon class="w-5 h-5 text-emerald-500" />
                <p class="font-semibold text-sm hero-heading">Application Accepted!</p>
              </div>
              <p class="text-xs hero-muted">Congrats! You got the internship 🎉</p>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </section>
</template>

<style scoped>
/* Floating card animations — replaces framer-motion animate={{ y: [0, -8, 0] }} */
@keyframes float-up {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}
@keyframes float-down {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(8px);
  }
}

.animate-float-up {
  animation: float-up 3s ease-in-out infinite;
}
.animate-float-down {
  animation: float-down 3.5s ease-in-out infinite;
  animation-delay: 0.5s;
}
</style>
