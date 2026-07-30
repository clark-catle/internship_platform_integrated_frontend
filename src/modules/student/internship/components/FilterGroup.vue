<template>
  <div>
    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
      {label}
    </p>
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => (
      <button key="{opt}" onClick="{()" ="">
        onChange(opt)} className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all
        duration-200 ${ value === opt ? "gradient-primary text-white shadow-sm" : "bg-muted
        text-muted-foreground hover:bg-accent hover:text-accent-foreground" }`}> {opt}
      </button>
      ))}
    </div>
  </div>
</template>
