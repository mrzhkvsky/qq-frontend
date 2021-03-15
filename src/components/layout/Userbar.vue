<template>
  <li class="nav-item dropdown">
    <div v-click-away="close">
      <a class="nav-icon dropdown-toggle d-inline-block d-sm-none" href="#" @click="toggle">
        <UserIcon />
      </a>
      <a class="nav-link dropdown-toggle d-none d-sm-inline-block" href="#" @click="toggle">
        <img src="@/assets/img/avatars/avatar.jpg" class="avatar img-fluid rounded me-1" alt="Charles Hall">
        <span class="text-dark">{{ user.firstName }} {{ user.lastName }}</span>
      </a>
    </div>
    <div class="dropdown-menu dropdown-menu-end" :class="{ 'show': isOpen }">
      <a class="dropdown-item" href="#">
        <UserIcon />
        {{ $t('layout.userbar.profile') }}
      </a>
      <a class="dropdown-item" href="#">
        <SettingsIcon />
        {{ $t('layout.userbar.settings') }}
      </a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#" @click="logout">
        <LogOutIcon />
        {{ $t('layout.userbar.logout') }}
      </a>
    </div>
  </li>
</template>

<script>
import useToggle from '@/use/useToggle'
import store from '@/store'

export default {
  props: {
    user: Object
  },
  setup() {
    const { isOpen, toggle, close } = useToggle()

    const logout = () => store.dispatch('auth/logout')

    return { isOpen, toggle, close, logout }
  }
}
</script>
