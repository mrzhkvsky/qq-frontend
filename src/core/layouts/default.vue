<template>
  <div class="wrapper">
    <Sidebar :is-open="isOpen" />
    <div class="main">
      <Navbar :toggle-sidebar="toggle" />
      <RouterView />
    </div>
  </div>
</template>

<script>
import useToggle from '@/core/composables/use-toggle'
import Sidebar from '@/core/components/layout/Sidebar'
import Navbar from '@/core/components/layout/Navbar'

export default {
  components: {
    Sidebar,
    Navbar
  },
  setup() {
    const { isOpen, toggle } = useToggle(true)

    return { isOpen, toggle }
  }
}
</script>
