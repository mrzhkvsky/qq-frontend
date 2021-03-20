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
import Sidebar from '@/app/shared/components/layout/Sidebar'
import Navbar from '@/app/shared/components/layout/Navbar'

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
