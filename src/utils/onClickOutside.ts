import { onMounted, onUnmounted, type Ref } from 'vue'

export const onClickOutside = (target: Ref<HTMLElement | null>, callback: () => void) => {
  const close = (event: MouseEvent) => {
    const element = target.value

    if (!element || element.contains(event.target as Node)) return

    callback()
  }

  onMounted(() => document.addEventListener('mousedown', close))
  onUnmounted(() => document.removeEventListener('mousedown', close))
}
