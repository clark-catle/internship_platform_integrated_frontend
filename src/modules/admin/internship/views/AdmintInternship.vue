<script setup lang="ts">
import InternshipCard from '../components/InternshipCard.vue'
import { useInternship } from '../composables/useInternship.ts'

const { internships, search, filterSetup } = useInternship()
</script>

<template>
  <div class="">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <InternshipCard
        v-for="(internship, i) in internships"
        :key="internship.id"
        :internship="internship"
        :index="i"
      />
    </div>

    <!-- {/* Grid */}
          {loading ? (
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array(6).fill(0).map((_, i) => <CardSkeleton key={i} />)}
            </div>
          ) : filtered.length === 0 ? (
            <EmptyState
              icon={Briefcase}
              title="No internships found"
              description="Try adjusting your search or filters to find more opportunities"
            />
          ) : (
            <>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {paginated.map((internship, i) => (
                  <InternshipCard
                    key={internship.id}
                    internship={internship}
                    index={i}
                    onSave={handleSave}
                    saved={savedIds.includes(internship.id)}
                  />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div class="flex items-center justify-center gap-2 mt-10">
                  <Button variant="outline" size="icon" disabled={page === 1} onClick={() => setPage(p => p - 1)} class="rounded-xl">
                    <ChevronLeft class="w-4 h-4" />
                  </Button>
                  {Array(totalPages).fill(0).map((_, i) => (
                    <Button key={i} variant={page === i + 1 ? "default" : "outline"}
                      onClick={() => setPage(i + 1)}
                      class={`rounded-xl w-10 h-10 ${page === i + 1 ? "gradient-primary text-white border-0" : ""}`}>
                      {i + 1}
                    </Button>
                  ))}
                  <Button variant="outline" size="icon" disabled={page === totalPages} onClick={() => setPage(p => p + 1)} class="rounded-xl">
                    <ChevronRight class="w-4 h-4" />
                  </Button>
                </div>
              )}
            </>
          )}
        </div> -->
  </div>
</template>
