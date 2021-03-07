import { ref } from 'vue'

export default function useToggleDropdown () {
  const isOpen = ref(false)
  const toggleMethod = () => isOpen.value = !isOpen.value
  const closeMethod = () => isOpen.value = false

  return {
    isOpen,
    toggleMethod,
    closeMethod
  }
}
