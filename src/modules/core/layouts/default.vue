<template>
  <div class="wrapper">
    <Sidebar />
    <div class="main">
      <Navbar />
      <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from '@/modules/core/components/layout/Sidebar'
import Navbar from '@/modules/core/components/layout/Navbar'

export default {
  components: {
    Sidebar,
    Navbar
  }
}
</script>
