<template>
  <div class="wrapper">
    <Sidebar :is-open="isOpen" />
    <div class="main">
      <Navbar :toggle-sidebar="toggle" />
      <router-view />
    </div>
  </div>
</template>

<script>
import useToggle from '@/composables/use-toggle'
import Sidebar from '@/components/layout/Sidebar'
import Navbar from '@/components/layout/Navbar'

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
