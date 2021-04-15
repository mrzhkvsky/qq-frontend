<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Password</h5>

      <Form @submit="onSubmit" v-slot="{ errors }" :validation-schema="schema">

        <div class="mb-3">
          <label class="form-label">Current password</label>
          <Field :class="{ 'is-invalid': errors.currentPassword }" name="currentPassword" type="password" class="form-control" />
          <ErrorMessage name="currentPassword" class="invalid-feedback" />
        </div>

        <div class="mb-3">
          <label class="form-label">New password</label>
          <Field :class="{ 'is-invalid': errors.newPassword }" name="newPassword" type="password" class="form-control" />
          <ErrorMessage name="newPassword" class="invalid-feedback" />
        </div>

        <div class="mb-3">
          <label class="form-label">Verify password</label>
          <Field :class="{ 'is-invalid': errors.confirmPassword }" name="confirmPassword" type="password" class="form-control" />
          <ErrorMessage name="confirmPassword" class="invalid-feedback" />
        </div>
        <button type="submit" class="btn btn-primary">Change password</button>

      </Form>

    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Form, Field, ErrorMessage, FormActions } from 'vee-validate'
import { object as yupObject, string as yupString, ref as yupRef } from 'yup'
import SettingsService from '@/modules/account/services/settings.service'
import RpcInvalidParamsError from '@/core/errors/rpc-invalid-params.error'

interface PasswordFormType extends Record<string, string>{
  currentPassword: string,
  newPassword: string,
  confirmPassword: string
}

export default defineComponent({
  components: { Form, Field, ErrorMessage },
  setup() {
    const schema = yupObject({
      currentPassword: yupString().min(6).max(30).required(),
      newPassword: yupString().min(6).max(30).required().notOneOf([yupRef('currentPassword')]),
      confirmPassword: yupString().min(6).max(30).required().oneOf([yupRef('newPassword')])
    })

    const onSubmit = async (values: PasswordFormType, { setErrors }: FormActions<PasswordFormType>) => {
      try {
        await SettingsService.updatePassword(values.currentPassword, values.newPassword, values.confirmPassword)
      } catch (e) {
        if (e instanceof RpcInvalidParamsError) {
          const fields = {}
          e.errors.forEach((value) => {
            // @ts-ignore
            fields[value.path.slice(1, -1)] = value.message

            setErrors(fields)
          })

          return
        }

        throw e
      }
    }

    return { schema, onSubmit }
  }
})
</script>
