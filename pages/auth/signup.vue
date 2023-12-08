<template>
  <div class="split-container active">
    <div class="left">
      <LeftTerminal />
    </div>
    <div class="right">
      <div class="centered-register">
        <AuthStyleAuth title="Register">
          <UForm :state="formState" :schema="SignupSchema" @submit="handleSubmit">
            <UFormGroup name="name" label="Name">
              <UInput v-model="formState.name" />
            </UFormGroup>
            <UFormGroup name="email" label="Email">
              <UInput v-model="formState.email" />
            </UFormGroup>
            <UFormGroup name="password" label="Password">
              <UInput v-model="formState.password" />
            </UFormGroup>
            <UFormGroup name="passwordConfirm" label="Confirm Password">
              <UInput v-model="formState.passwordConfirm" />
            </UFormGroup>
            <UButton block type="submit" :loading="isLoading">Register Acc</UButton>
          </UForm>
        </AuthStyleAuth>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import SignupSchema from '~/schemas/Signup.schema';
import type { FormSubmitEvent } from '@nuxt/ui/dist/runtime/types';
import { z } from 'zod';

const isLoading = ref(false)
const formState = reactive({
  name: undefined,
  email: undefined,
  password: undefined,
  passwordConfirm: undefined,
})

async function handleSubmit(event: FormSubmitEvent<z.output<typeof SignupSchema>>) {
  try {
    isLoading.value = true;
    useFetch('/api/auth/signup', {
      method: 'POST',
      body: JSON.stringify(event.data),
      watch: false
    })
    useToast().add({
      title: 'Acc created!',
      description: 'Account created successfully',
      timeout: 2000
    })
  } catch(e: any) {
    useToast().add({
      title: 'Error',
      description: e.message || 'Something went wrong!',
    })
  } finally {
    isLoading.value = false;
  }
}

</script>

<style>
.centered-register {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>