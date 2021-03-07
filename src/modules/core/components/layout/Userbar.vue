<template>
  <li class="nav-item dropdown" v-click-away="onClickAway">
    <div v-click-away="onClickAway">
      <a class="nav-icon dropdown-toggle d-inline-block d-sm-none" href="#" @click="toggle">
        <UserIcon />
      </a>
      <a class="nav-link dropdown-toggle d-none d-sm-inline-block" href="#" @click="toggle">
        <img src="@/assets/img/avatars/avatar.jpg" class="avatar img-fluid rounded me-1" alt="Charles Hall">
        <span class="text-dark">Charles Hall</span>
      </a>
    </div>
    <div class="dropdown-menu dropdown-menu-end" :class="{ 'show': isOpen }">
      <a class="dropdown-item" href="#">
        <UserIcon />
        {{ $t('core.userbar.profile') }}
      </a>
      <a class="dropdown-item" href="#">
        <SettingsIcon />
        {{ $t('core.userbar.settings') }}
      </a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">
        <LogOutIcon />
        {{ $t('core.userbar.logout') }}
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
