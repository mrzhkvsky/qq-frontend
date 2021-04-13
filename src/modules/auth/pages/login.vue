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
        <form @submit="onSubmit">
          <div class="mb-3">
            <label class="form-label">{{ $t('auth.email') }}</label>
            <input class="form-control form-control-lg" v-model="email" :class="{ 'is-invalid': errors.email }" type="email" name="email" :placeholder="$t('auth.emailPlaceholder')" />
            <div v-if="errors.email" class="invalid-feedback">{{ errors.email }}</div>
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">{{ $t('auth.password') }}</label>
            <input id="password" class="form-control form-control-lg" v-model="password" :class="{ 'is-invalid': errors.password }" type="password" name="password" :placeholder="$t('auth.passwordPlaceholder')"/>
            <div v-if="errors.password" class="invalid-feedback">{{ errors.password }}</div>
          </div>
          <div class="text-center mt-3">
            <button type="submit" class="btn btn-lg btn-primary">{{ $t('auth.signIn') }}</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import { useI18n } from 'vue-i18n'
import authService from '@/modules/auth/services/auth.service'
import { useRouter } from 'vue-router'
import { defineComponent } from 'vue'

interface LoginForm {
  email: string;
  password: string;
}

export default defineComponent({
  setup() {
    const { t } = useI18n()
    const router = useRouter()

    const validationSchema = yup.object({
      email: yup.string().email().required(),
      password: yup.string().min(6).max(30).required()
    })

    const { handleSubmit, errors } = useForm<LoginForm>({ validationSchema })
    const { value: email } = useField('email');
    const { value: password } = useField('password');

    const onSubmit = handleSubmit(async ({ email, password }, { setErrors }) => {
      console.log()
      try {
        await authService.login(email, password)
      } catch (e) {
        if (e.response !== undefined && e.response.status === 400) {
          setErrors({ email: t('auth.error') })
          return
        }

        throw e
      }

      await router.push({ name: 'home-index' })
    });

    return { email, password, onSubmit, errors }
  }
})
</script>
