<template>
  <nav id="sidebar" class="sidebar" :class="{ 'collapsed': !isOpen }">
    <div class="sidebar-content">
      <router-link class="sidebar-brand" :to="{ name: 'home-index' }">
        <span class="align-middle">QQ App</span>
      </router-link>
      <ul class="sidebar-nav">
        <li class="sidebar-header">
          Pages
        </li>
        <li class="sidebar-item">
          <router-link class="sidebar-link" :to="{ name: 'home-index' }">
            <AirplayIcon />
            <span class="align-middle">{{ $t('shared.layout.sidebar.home') }}</span>
          </router-link>
        </li>
        <li class="sidebar-item">
          <router-link class="sidebar-link" :to="{ name: 'home-test' }">
            <AirplayIcon />
            <span class="align-middle">{{ $t('shared.layout.sidebar.test') }}</span>
          </router-link>
        </li>

        <li class="sidebar-header">
          Auth
        </li>
        <li class="sidebar-item">
          <router-link class="sidebar-link" :to="{ name: 'security-login' }">
            <AirplayIcon />
            <span class="align-middle">{{ $t('shared.layout.sidebar.login') }}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      default: true
    }
  }
}
</script>
