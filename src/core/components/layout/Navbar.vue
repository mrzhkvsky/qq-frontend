<template>
  <nav class="navbar navbar-expand navbar-light navbar-bg">
    <a class="sidebar-toggle d-flex" @click="toggleSidebar">
      <i class="hamburger align-self-center"></i>
    </a>
    <Searchbar />
    <div class="navbar-collapse collapse">
      <ul class="navbar-nav navbar-align">
        <Alertbar />
        <Messagebar />
        <Langbar />
        <Userbar />
      </ul>
    </div>
  </nav>
</template>

<script>
import Alertbar from '@/core/components/layout/Alertbar'
import Messagebar from '@/core/components/layout/Messagebar'
import Userbar from '@/core/components/layout/Userbar'
import Searchbar from '@/core/components/layout/Searchbar'
import Langbar from '@/core/components/layout/Langbar'

export default {
  components: { Langbar, Searchbar, Alertbar, Messagebar, Userbar },
  props: {
    toggleSidebar: Function
  }
}
</script>
