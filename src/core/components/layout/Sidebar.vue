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
            <FeatherIcon name="airplay" />
            <span class="align-middle">{{ $t('app.sidebar.home') }}</span>
          </router-link>
        </li>
        <li class="sidebar-item">
          <router-link class="sidebar-link" :to="{ name: 'home-test' }">
            <FeatherIcon name="airplay" />
            <span class="align-middle">{{ $t('app.sidebar.test') }}</span>
          </router-link>
        </li>

        <li class="sidebar-header">
          Auth
        </li>
        <li class="sidebar-item">
          <router-link class="sidebar-link" :to="{ name: 'auth-login' }">
            <FeatherIcon name="airplay" />
            <span class="align-middle">{{ $t('app.sidebar.login') }}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="js">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    isOpen: {
      type: Boolean,
      default: true
    }
  }
})
</script>
