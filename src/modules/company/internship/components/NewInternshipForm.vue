<script setup lang="ts">
import { mockSkills } from '@/data/skill'
import type { internship as internshipType } from '@/shared/types'
import { X } from '@lucide/vue'
import { AnimatePresence, Motion } from 'motion-v'

const { internship } = defineProps<{
  internship?: internshipType | null // omit/undefined for "add" mode
}>()

defineEmits<{
  close: []
}>()
</script>

<template>
  <AnimatePresence>
    <Motion
      as="div"
      :initial="{ opacity: 0 }"
      :animate="{ opacity: 1 }"
      :exit="{ opacity: 0 }"
      :transition="{ duration: 0.15, ease: 'easeOut' }"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4 py-8"
      @click.self="$emit('close')"
    >
      <div
        class="max-h-full w-full max-w-2xl overflow-y-auto rounded-2xl border border-border bg-card p-6 shadow-xl"
      >
        <div class="mb-5 flex items-center justify-between">
          <h3 class="text-lg font-semibold text-card-foreground">
            {{ internship ? 'Edit internship' : 'Add internship' }}
          </h3>
          <button
            type="button"
            class="rounded-lg p-1.5 text-muted-foreground hover:bg-secondary"
            @click="$emit('close')"
            aria-label="Close"
          >
            <X class="h-5 w-5" />
          </button>
        </div>

        <form class="space-y-5">
          <div>
            <label class="mb-1.5 block text-sm font-medium text-foreground">Title</label>
            <input
              :value="internship?.title"
              type="text"
              maxlength="255"
              class="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30"
            />
            <!-- <p v-if="errors.title" class="mt-1 text-xs text-destructive">
              {{ errors.title }}
            </p> -->
          </div>

          <div>
            <label class="mb-1.5 block text-sm font-medium text-foreground">Description</label>
            <textarea
              :value="internship?.description"
              rows="3"
              class="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30"
            />
            <!-- <p v-if="errors.description" class="mt-1 text-xs text-destructive">
              {{ errors.description }}
            </p> -->
          </div>

          <div>
            <label class="mb-1.5 block text-sm font-medium text-foreground">Requirements</label>
            <textarea
              :value="internship?.requirements"
              rows="3"
              class="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30"
            />
            <!-- <p v-if="errors.requirements" class="mt-1 text-xs text-destructive">
              {{ errors.requirements }}
            </p> -->
          </div>

          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label class="mb-1.5 block text-sm font-medium text-foreground"
                >Region (optional)</label
              >
              <input
                :value="internship?.location.region"
                type="text"
                class="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30"
              />
            </div>
            <div>
              <label class="mb-1.5 block text-sm font-medium text-foreground"
                >City (optional)</label
              >
              <input
                :value="internship?.location.city"
                type="text"
                class="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label class="mb-1.5 block text-sm font-medium text-foreground">Setup</label>
              <select
                :value="internship?.setup"
                class="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30"
              >
                <option value="on site">On site</option>
                <option value="hybrid">Hybrid</option>
                <option value="remote">Remote</option>
              </select>
            </div>
            <div>
              <label class="mb-1.5 block text-sm font-medium text-foreground">Allowance</label>
              <select
                :value="internship?.allowance"
                class="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30"
              >
                <option value="non">No allowance</option>
                <option value="provided">Provided</option>
                <option value="discuss">Negotiable</option>
              </select>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="mb-1.5 block text-sm font-medium text-foreground">Duration</label>
              <input
                :value="internship?.duration"
                type="number"
                min="1"
                class="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30"
              />
              <!-- <p v-if="errors.duration" class="mt-1 text-xs text-destructive">
                {{ errors.duration }}
              </p> -->
            </div>
            <div>
              <label class="mb-1.5 block text-sm font-medium text-foreground">Unit</label>
              <select
                :value="internship?.duration_unit"
                class="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30"
              >
                <option value="hr">Hours</option>
                <option value="day">Days</option>
                <option value="month">Months</option>
              </select>
            </div>
          </div>

          <div>
            <label class="mb-1.5 block text-sm font-medium text-foreground"
              >Skills (optional)</label
            >
            <div class="flex flex-wrap gap-2">
              <!-- will highlight if the skill was chosen -->
              <button
                v-for="s in mockSkills"
                :key="s.id"
                type="button"
                class="rounded-full border px-3 py-1.5 text-xs font-medium transition-colors"
                :class="
                  false
                    ? 'border-primary bg-accent text-accent-foreground'
                    : 'border-border text-muted-foreground hover:border-primary/50'
                "
              >
                {{ s.name }}
              </button>
            </div>
          </div>

          <!-- <div>
            <label class="mb-1.5 block text-sm font-medium text-foreground"
              >Other skills (optional)</label
            >
            <div class="flex flex-wrap gap-2">
              <SkillChip
                v-for="s in form.other_skills"
                :key="s"
                removable
                @remove="removeOtherSkill(s)"
                >{{ s }}</SkillChip
              >
            </div>
            <div class="mt-2 flex gap-2">
              <input
                v-model="otherSkillDraft"
                type="text"
                placeholder="Type a skill and press Enter"
                class="flex-1 rounded-xl border border-input bg-background px-3.5 py-2 text-sm focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30"
                @keydown.enter.prevent="addOtherSkill"
              />
              <button
                type="button"
                class="rounded-xl border border-border px-3.5 py-2 text-sm font-medium text-foreground hover:bg-secondary"
                @click="addOtherSkill"
              >
                Add
              </button>
            </div>
          </div> -->

          <div class="flex gap-3 pt-1">
            <button
              type="submit"
              class="rounded-xl gradient-primary px-5 py-2.5 text-sm font-medium text-white hover:opacity-90"
            >
              {{ internship ? 'Save changes' : 'Post internship' }}
            </button>
            <button
              type="button"
              class="rounded-xl border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:bg-secondary"
              @click="$emit('close')"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </Motion>
  </AnimatePresence>
</template>
