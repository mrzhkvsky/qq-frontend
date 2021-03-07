<template>
  <li class="nav-item dropdown" v-click-away="onClickAway">
    <a class="nav-flag dropdown-toggle" href="#" @click="toggle">
      <img :src="loadFlag($i18n.locale)" :alt="$i18n.locale">
    </a>
    <div class="dropdown-menu dropdown-menu-end" :class="{ 'show': isOpen }">
      <a v-for="locale in $i18n.availableLocales" :key="locale" class="dropdown-item" href="#" @click="changeLocale(locale)">
        <img :src="loadFlag(locale)" alt="English" width="20" class="align-middle me-1">
        <span class="align-middle">{{ locale }}</span>
      </a>
    </div>
  </li>
</template>

<script>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

export default {
  setup() {
    const isOpen = ref(false)
    const toggle = () => isOpen.value = !isOpen.value
    const onClickAway = () => isOpen.value = false

    const { locale } = useI18n({ useScope: 'global' })

    const changeLocale = (code) => locale.value = code

    const loadFlag = (name) => require(`@/assets/img/flags/${name}.png`)

    return { isOpen, toggle, onClickAway, changeLocale, loadFlag }
  }
}
</script>
