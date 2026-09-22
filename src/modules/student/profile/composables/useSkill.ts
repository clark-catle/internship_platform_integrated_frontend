import { mockSkills } from '@/data/skill'
import type { skill } from '@/shared/types'
import { ref, watch } from 'vue'

export const useSkill = () => {
  const searchSkill = ref('')
  const skillResult = ref<skill[]>(mockSkills)
  const showSkillChoices = ref(false)

  const search = () => {
    skillResult.value = mockSkills.filter((v) =>
      v.name.toLocaleLowerCase().includes(searchSkill.value.toLowerCase()),
    )
  }

  watch(searchSkill, search)

  return { searchSkill, skillResult, showSkillChoices }
}
