<template>
  <div class="split-container active">
    <div class="left">
      <LeftTerminal />
    </div>
    <div class="right">
      <div class="centered-login">
        <AuthStyleAuth title="Login">
          <UForm :state="formState" :schema="SigninSchema" @submit="handleSignin">
            <UFormGroup name="email" label="Email">
              <UInput type="email" v-model="formState.email" />
            </UFormGroup>
            <UFormGroup name="password" label="Password">
              <UInput type="password" v-model="formState.password" />
            </UFormGroup>
            <div style="padding-top: 12px;"><UButton :loading="isLoading" type="submit" block>Signin</UButton></div>
          </UForm>
        </AuthStyleAuth>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { z } from 'zod';
import SigninSchema from '~/schemas/Signin.schema'
import type { FormSubmitEvent } from '@nuxt/ui/dist/runtime/types';

const router = useRouter()
const isLoading = ref(false)
const formState = reactive({
  email: undefined,
  password: undefined,
})

const {signIn} = useAuth()

async function handleSignin(event: FormSubmitEvent<z.output<typeof SigninSchema>>) {

  try {
    isLoading.value = true
    const res = await signIn('credentials', {
      email: event.data.email,
      password: event.data.password,
      redirect: false,
    })
    // @ts-expect-error
    if(!res.error) {
      router.push('/')
    } else {
      console.log(res)
    }
  } catch(e) {
    console.log(e)
  } finally {
    isLoading.value = false
  }
}



</script>

<style>

.centered-login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>