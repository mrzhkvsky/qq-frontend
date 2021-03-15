<template>
  <div class="text-center mt-4">
    <h1 class="h2">{{ $t('auth.welcome') }}</h1>
    <p class="lead">
      {{ $t('auth.info') }}
    </p>
  </div>
  <div class="card">
    <div class="card-body">
      <div class="m-sm-4">
        <Form :validation-schema="schema" v-slot="{ errors }" @submit="submitForm">
          <div class="mb-3">
            <label class="form-label">{{ $t('auth.email') }}</label>
            <Field class="form-control form-control-lg" :class="{ 'is-invalid':errors.email }" type="email" name="email" :placeholder="$t('auth.emailPlaceholder')" />
            <ErrorMessage class="invalid-feedback" name="email" />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">{{ $t('auth.password') }}</label>
            <Field id="password" class="form-control form-control-lg" :class="{ 'is-invalid':errors.password }" type="password" name="password" :placeholder="$t('auth.passwordPlaceholder')"/>
            <ErrorMessage class="invalid-feedback" as="div" name="password" />
          </div>
          <div class="text-center mt-3">
            <button type="submit" class="btn btn-lg btn-primary">{{ $t('auth.signIn') }}</button>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store'
import router from '@/router'
import { Field, Form, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'
import { useI18n } from 'vue-i18n'

export default {
  components: { Field, Form, ErrorMessage },
  setup() {
    const { t } = useI18n()

    const schema = yup.object().shape({
      email: yup.string().email().required(),
      password: yup.string().min(6).max(30).required()
    })

    const submitForm = async ({ email, password }, actions) => {
      try {
        await store.dispatch('auth/login', { email, password })
      } catch (e) {
        actions.setErrors({ email: t('auth.error') })
        return
      }

      await store.dispatch('auth/fetchUser')

      await router.push({ name: 'home-index' })
    }

    return { submitForm, schema }
  }
}
</script>
