<template>
  <div class="split-container active">
    <div class="left">
      <LeftTerminal />
    </div>
    <div class="right">
      <div class="centered-login" v-if="!signupClicked">
        <AuthStyleAuth title="Login" class="stackit">
          <UForm :state="formState" :schema="SigninSchema" @submit="handleSignin" @submit.prevent="handleSignin">
            <div style="padding-bottom: 6px; padding-top: 6px;">
              <UFormGroup name="email">
                <UInput type="email" v-model="formState.email" placeholder="Email"/>
              </UFormGroup>
            </div>
            <div style="padding-bottom: 6px; padding-top: 6px;">
              <UFormGroup name="password">
                <UInput type="password" v-model="formState.password" placeholder="Password"/>
              </UFormGroup>
            </div>
            <div style="display: flex; justify-content: flex-start;">
              <div style="display: flex; flex-direction: column; align-items: center; padding-right: 14px;">
                <button style="background-color: var(--accent-secondary); height: 32px; font-family: bloop; color: var(--text-secondary); cursor: pointer;" :loading="isLoading" type="submit" block><span>Sign in</span></button>
              </div>
              <div>
                <button @click="{signupClicked=true;}" style="background-color: var(--accent-quaternary); height: 32px; font-family: bloop; color: var(--text-secondary); cursor: pointer;" :loading="isLoading" type="submit" block><span>Sign up</span></button>
              </div>
            </div>
          </UForm>
        </AuthStyleAuth>
      </div>
      <div class="centered-login" v-if="signupClicked">
        <AuthStyleAuth title="Signup" class="stackit">
          <UForm :state="suformState" :schema="SignupSchema" @submit="handleSuSubmit">
            <div style="padding-bottom: 6px; padding-top: 6px;">
              <UFormGroup name="name">
                <UInput type="name" v-model="suformState.name" placeholder="Name"/>
              </UFormGroup>
            </div>
            <div style="padding-bottom: 6px; padding-top: 6px;">
              <UFormGroup name="email">
                <UInput v-model="suformState.email" placeholder="Email" />
              </UFormGroup>
            </div>
            <div style="padding-bottom: 6px; padding-top: 6px;">
              <UFormGroup name="password">
                <UInput v-model="suformState.password" placeholder="Password"/>
              </UFormGroup>
            </div>
            <div style="padding-bottom: 6px; padding-top: 6px;">
              <UFormGroup name="passwordConfirm">
                <UInput v-model="suformState.passwordConfirm" placeholder="Confirm Password"/>
              </UFormGroup>
            </div>
            <button type="submit" style="background-color: var(--accent-quaternary); height: 32px; font-family: bloop; color: var(--text-secondary); cursor: pointer;" block><span>Register</span></button>
          </UForm>
        </AuthStyleAuth>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { z } from 'zod';
import SigninSchema from '~/schemas/Signin.schema'
import SignupSchema from '~/schemas/Signup.schema';
import type { FormSubmitEvent } from '@nuxt/ui/dist/runtime/types';

let signupClicked = ref(false)
const router = useRouter()
const isLoading = ref(false)

const formState = reactive({
  email: undefined,
  password: undefined,
})

const suformState = reactive({
  name: undefined,
  email: undefined,
  password: undefined,
  passwordConfirm: undefined,
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


async function handleSuSubmit(event: FormSubmitEvent<z.output<typeof SignupSchema>>) {
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
    useRouter().push('/auth/signin')
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

.u-form-group__label {
  font-family: 'bloop';
  color: var(--text-primary);
  font-size: 1.5rem;
  margin: auto;
  font-display: swap;
}

.centered-login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}
</style>