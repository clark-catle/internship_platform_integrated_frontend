import { mockSkills } from '@/data/skill'
import type { skill } from '@/shared/types'
import { ref, watch } from 'vue'

export const useSkill = () => {
  const searchQuery = ref('')
  const skillResult = ref<skill[]>(mockSkills)
  const showChoices = ref(false)

  const search = () => {
    skillResult.value = mockSkills.filter((v) =>
      v.name.toLocaleLowerCase().includes(searchQuery.value.toLowerCase()),
    )
  }

  watch(searchQuery, search)

  return { searchQuery, skillResult, showChoices }
}
