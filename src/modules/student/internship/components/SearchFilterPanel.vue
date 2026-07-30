<template><div className="bg-card rounded-2xl border border-border p-4 shadow-card">
      {/* Search bar */}
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            placeholder="Search internships, companies, skills..."
            className="pl-10 rounded-xl border-border bg-background"
          />
        </div>
        <Button onClick={() => setShowFilters(!showFilters)} variant="outline" className="rounded-xl gap-2 relative">
          <SlidersHorizontal className="w-4 h-4" />
          <span className="hidden sm:inline">Filters</span>
          {hasActiveFilters && (
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full text-white text-[10px] flex items-center justify-center">
              {Object.values(filters).filter((v) => v !== "All").length}
            </span>
          )}
        </Button>
        <Button onClick={handleSearch} className="gradient-primary text-white border-0 rounded-xl">
          Search
        </Button>
      </div>

      {/* Filter panels */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden">
            <div className="pt-4 mt-4 border-t border-border space-y-4">
              <FilterGroup label="Domain" options={domains} value={filters.domain} onChange={(v) => updateFilter("domain", v)} />
              <FilterGroup label="Type" options={types} value={filters.type} onChange={(v) => updateFilter("type", v)} />
              <FilterGroup label="Duration" options={durations} value={filters.duration} onChange={(v) => updateFilter("duration", v)} />

              {hasActiveFilters && (
                <button onClick={clearFilters} className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors">
                  <X className="w-3 h-3" /> Clear all filters
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div></template>