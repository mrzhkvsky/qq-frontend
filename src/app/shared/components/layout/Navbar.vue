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
import Alertbar from '@/app/shared/components/layout/Alertbar'
import Messagebar from '@/app/shared/components/layout/Messagebar'
import Userbar from '@/app/shared/components/layout/Userbar'
import Searchbar from '@/app/shared/components/layout/Searchbar'
import Langbar from '@/app/shared/components/layout/Langbar'

export default {
  components: { Langbar, Searchbar, Alertbar, Messagebar, Userbar },
  props: {
    toggleSidebar: Function
  }
}
</script>
