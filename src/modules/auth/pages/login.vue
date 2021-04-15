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
        <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors }">
          <div class="mb-3">
            <label class="form-label">{{ $t('auth.email') }}</label>
            <Field class="form-control form-control-lg" :class="{ 'is-invalid': errors.email }" type="email" name="email" :placeholder="$t('auth.emailPlaceholder')" />
            <ErrorMessage name="email" class="invalid-feedback" />
          </div>
          <div class="mb-3">
            <label class="form-label">{{ $t('auth.password') }}</label>
            <Field class="form-control form-control-lg" :class="{ 'is-invalid': errors.password }" type="password" name="password" :placeholder="$t('auth.passwordPlaceholder')" />
            <ErrorMessage name="password" class="invalid-feedback" />
          </div>
          <div class="text-center mt-3">
            <button type="submit" class="btn btn-lg btn-primary">{{ $t('auth.signIn') }}</button>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Form, Field, ErrorMessage, FormActions } from 'vee-validate'
import * as yup from 'yup'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { defineComponent } from 'vue'
import AuthService from '@/modules/auth/services/auth.service'
import AuthError from '@/modules/auth/errors/auth.error'

interface LoginFormType extends Record<string, string>{
  email: string,
  password: string
}

export default defineComponent({
  components: { Form, Field, ErrorMessage },
  setup() {
    const { t } = useI18n()
    const router = useRouter()

    const schema = yup.object({
      email: yup.string().email().required(),
      password: yup.string().min(6).max(30).required()
    })

    const onSubmit = async (values: LoginFormType, { setFieldError }: FormActions<LoginFormType>) => {
      try {
        await AuthService.login(values.email, values.password)
      } catch (e) {
        if (e instanceof AuthError) {
          setFieldError('email', t('auth.error'))
          return
        }

        throw e
      }

      await router.push({ name: 'home-index' })
    }

    return { schema, onSubmit }
  }
})
</script>
