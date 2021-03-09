<template>
  <li class="nav-item dropdown">
    <div v-click-away="closeMethod">
      <a class="nav-icon dropdown-toggle d-inline-block d-sm-none" href="#" @click="toggleMethod">
        <UserIcon />
      </a>
      <a class="nav-link dropdown-toggle d-none d-sm-inline-block" href="#" @click="toggleMethod">
        <img src="@/assets/img/avatars/avatar.jpg" class="avatar img-fluid rounded me-1" alt="Charles Hall">
        <span class="text-dark">Charles Hall</span>
      </a>
    </div>
    <div class="dropdown-menu dropdown-menu-end" :class="{ 'show': isOpen }">
      <a class="dropdown-item" href="#">
        <UserIcon />
        {{ $t('app.userbar.profile') }}
      </a>
      <a class="dropdown-item" href="#">
        <SettingsIcon />
        {{ $t('app.userbar.settings') }}
      </a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">
        <LogOutIcon />
        {{ $t('app.userbar.logout') }}
      </a>
    </div>
  </li>
</template>

<script>
import useToggleDropdown from '@/use/useToggleDropdown'

export default {
  setup() {
    const { isOpen, toggleMethod, closeMethod } = useToggleDropdown()

    return { isOpen, toggleMethod, closeMethod }
  }
}
</script>
