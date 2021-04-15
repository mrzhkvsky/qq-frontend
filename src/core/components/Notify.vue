<template>
  <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <FeatherIcon />
      <strong class="me-auto">Bootstrap</strong>
      <small>11 mins ago</small>
      <button @click="$emit('close-toast')" type="button" class="btn-close" aria-label="Close"></button>
    </div>
    <div class="toast-body">
      {{ msg }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FeatherIcon from '@/core/components/FeatherIcon.vue'

export default defineComponent({
  name: "Notify",
  components: { FeatherIcon },
  props: {
    msg: Object
  }
})
</script>
