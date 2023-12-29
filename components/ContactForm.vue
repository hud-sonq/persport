<template>
    <UForm :state="contactFormState" :schema="MessageSchema" @submit="handleContactFormSubmit">
        <div style="padding-bottom: 6px; padding-top: 6px;">
            <UFormGroup name="name">
                <UInput type="name" v-model="contactFormState.name" placeholder="Your name" />
            </UFormGroup>
        </div>
        <div style="padding-bottom: 6px; padding-top: 6px;">
            <UFormGroup name="email">
                <UInput v-model="contactFormState.company" placeholder="Your company" />
            </UFormGroup>
        </div>
        <div style="padding-bottom: 6px; padding-top: 6px;">
            <UFormGroup name="password">
                <UInput v-model="contactFormState.contact" placeholder="Your email"/>
            </UFormGroup>
        </div>
        <div style="padding-bottom: 6px; padding-top: 6px;">
            <UFormGroup name="passwordConfirm">
                <UInput v-model="contactFormState.message" placeholder="Your message"/>
            </UFormGroup>
        </div>
        <button type="submit" style="background-color: var(--accent-quaternary); height: 32px; font-family: bloop; color: var(--text-secondary); cursor: pointer;" block>
            <span>SEND</span>
        </button>
        <h4>{{ message}}</h4>
    </UForm>
</template>

<script setup lang="ts">
import MessageSchema from '~/schemas/Message.schema';
import type { FormSubmitEvent } from '@nuxt/ui/dist/runtime/types';
import { z } from 'zod';
import { ref } from 'vue';

const messageSendSuccess = ref(false);
const router = useRouter();
const isLoading = ref(false);
let message = ref<string>('');
let contactFormState = ref({
    name: undefined,
    company: undefined,
    contact: undefined,
    message: undefined
});
async function handleContactFormSubmit(event: FormSubmitEvent<z.output<typeof MessageSchema>>) {
    try {
        isLoading.value = true;
        useFetch('/api/messages', {
            method: 'POST',
            body: JSON.stringify(event.data),
            headers: {
                'Content-Type': 'application/json'
            },
            watch: false
        });
        message.value = 'Message sent successfully!';
    } catch (error) {
        console.error(error);
        message.value = 'Something went wrong. Please try again.';
    }
}

</script>