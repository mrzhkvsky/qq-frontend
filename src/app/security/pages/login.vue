<template>
  <div class="text-center mt-4">
    <h1 class="h2">{{ $t('security.welcome') }}</h1>
    <p class="lead">
      {{ $t('security.info') }}
    </p>
  </div>
  <div class="card">
    <div class="card-body">
      <div class="m-sm-4">
        <Form :validation-schema="schema" v-slot="{ errors }" @submit="submitForm">
          <div class="mb-3">
            <label class="form-label">{{ $t('security.email') }}</label>
            <Field class="form-control form-control-lg" :class="{ 'is-invalid':errors.email }" type="email" name="email" :placeholder="$t('security.emailPlaceholder')" />
            <ErrorMessage class="invalid-feedback" name="email" />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">{{ $t('security.password') }}</label>
            <Field id="password" class="form-control form-control-lg" :class="{ 'is-invalid':errors.password }" type="password" name="password" :placeholder="$t('security.passwordPlaceholder')"/>
            <ErrorMessage class="invalid-feedback" as="div" name="password" />
          </div>
          <div class="text-center mt-3">
            <button type="submit" class="btn btn-lg btn-primary">{{ $t('security.signIn') }}</button>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
import { Field, Form, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'
import { useI18n } from 'vue-i18n'
import authService from '@/app/shared/services/auth.service'
import { useRouter } from 'vue-router'

export default {
  components: { Field, Form, ErrorMessage },
  setup() {
    const { t } = useI18n()
    const router = useRouter()

    const schema = yup.object().shape({
      email: yup.string().email().required(),
      password: yup.string().min(6).max(30).required()
    })

    const submitForm = async ({ email, password }, actions) => {
      try {
        await authService.login({ email, password })
      } catch (e) {
        if (e.response !== undefined && e.response.status === 400) {
          actions.setErrors({ email: t('auth.error') })
          return
        }

        throw e
      }

      await router.push({ name: 'home-index' })
    }

    return { submitForm, schema }
  }
}
</script>
