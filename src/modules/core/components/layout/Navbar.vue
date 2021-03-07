<template>
  <nav class="navbar navbar-expand navbar-light navbar-bg">
    <a class="sidebar-toggle d-flex">
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
import Alertbar from '@/modules/core/components/layout/Alertbar'
import Messagebar from '@/modules/core/components/layout/Messagebar'
import Userbar from '@/modules/core/components/layout/Userbar'
import Searchbar from '@/modules/core/components/layout/Searchbar'
import Langbar from '@/modules/core/components/layout/Langbar'

export default {
  components: { Langbar, Searchbar, Alertbar, Messagebar, Userbar },
}
</script>
