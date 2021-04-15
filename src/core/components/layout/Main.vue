<template>
  <main class="content">
    <div class="container-fluid p-0">
      <h1 class="h3 mb-3">{{ title }}</h1>
      <div class="row">
        <slot />
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Main',
  props: {
    title: String
  }
}
</script>
