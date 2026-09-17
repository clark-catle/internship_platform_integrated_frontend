<script setup lang="ts">
import { Motion } from 'motion-v'
import SearchFilterPanel from '../components/SearchFilterPanel.vue'

const internships: string[] = []
</script>

<template>
  <div className="">
    <div className="gradient-hero py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <Motion
          as="h1"
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          className="font-poppins font-bold text-3xl sm:text-4xl text-white mb-3"
        >
          Find Your Perfect Internship
        </Motion>
        <p className="text-white/80 text-lg">
          <span v-if="internships.length > 0"
            >{{ internships.length }} opportunities waiting for you</span
          ><span v-else>Explore curated internship opportunities</span>
        </p>
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <SearchFilterPanel />
      </div>

      <div className="flex items-center justify-between mb-6">
        <p className="text-sm text-muted-foreground">
          8 found

          <!-- loading when searching, after it will show how many internship, but at default
          its the count of internship -->
        </p>
      </div>
    </div>

    <!-- {/* Grid */}
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <div className="flex items-center justify-center gap-2 mt-10">
                  <Button variant="outline" size="icon" disabled={page === 1} onClick={() => setPage(p => p - 1)} className="rounded-xl">
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  {Array(totalPages).fill(0).map((_, i) => (
                    <Button key={i} variant={page === i + 1 ? "default" : "outline"}
                      onClick={() => setPage(i + 1)}
                      className={`rounded-xl w-10 h-10 ${page === i + 1 ? "gradient-primary text-white border-0" : ""}`}>
                      {i + 1}
                    </Button>
                  ))}
                  <Button variant="outline" size="icon" disabled={page === totalPages} onClick={() => setPage(p => p + 1)} className="rounded-xl">
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </>
          )}
        </div> -->
  </div>
</template>
