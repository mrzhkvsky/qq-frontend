<template>
  <li class="nav-item dropdown">
    <div v-click-away="close">
      <a class="nav-icon dropdown-toggle d-inline-block d-sm-none" @click="toggle">
        <FeatherIcon name="user" />
      </a>
      <a class="nav-link dropdown-toggle d-none d-sm-inline-block" @click="toggle">
        <img src="@/assets/img/avatars/avatar.jpg" class="avatar img-fluid rounded me-1" alt="avatar">
        <span class="text-dark">{{ user.firstName }} {{ user.lastName }}</span>
      </a>
    </div>
    <div class="dropdown-menu dropdown-menu-end" :class="{ 'show': isOpen }">
      <a class="dropdown-item" href="#">
        <FeatherIcon name="user" />
        {{ $t('app.userbar.profile') }}
      </a>
      <router-link :to="{ name: 'account-settings-profile' }" class="dropdown-item">
        <FeatherIcon name="settings" />
        {{ $t('app.userbar.settings') }}
      </router-link>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#" @click="logout">
        <FeatherIcon name="log-in" />
        {{ $t('app.userbar.logout') }}
      </a>
    </div>
  </li>
</template>

<script>
import useToggle from '@/core/composables/use-toggle'
import authService from '@/modules/auth/services/auth.service'
import router from '@/plugins/router'

export default {
  setup() {
    const { isOpen, toggle, close } = useToggle()

    const user = authService.getUser()
    const logout = () => {
      authService.logout()
      router.push({ name: 'auth-login' })
    }

    return { isOpen, toggle, close, user, logout }
  }
}
</script>
