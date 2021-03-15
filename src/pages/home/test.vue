<template>
  <Main title="Test Home">
    <div>Soooo</div>
  </Main>
</template>

<script>
import useAuth from '@/use/useAuth'
import Main from '@/components/layout/Main'

export default {
  components: { Main },
  setup() {
    const { user } = useAuth()

    console.log(user)
  }
}
</script>
