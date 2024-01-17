<template>
    <div style="width: 100%; display: flex;">
        <UForm :state="contactFormState" :schema="MessageSchema" @submit="handleContactFormSubmit">
            <div style="padding-bottom: 6px; padding-top: 6px; width: 100%;">
                <UFormGroup name="name">
                    <UInput type="name" v-model="contactFormState.name" placeholder="Your name" />
                </UFormGroup>
            </div>
            <div style="padding-bottom: 6px; padding-top: 6px;">
                <UFormGroup name="contact">
                    <UInput v-model="contactFormState.contact" placeholder="Your email"/>
                </UFormGroup>
            </div>
            <div style="padding-bottom: 6px; padding-top: 6px;">
                <UFormGroup name="company" :required="false">
                    <UInput v-model="contactFormState.company" placeholder="Company (optional)" :required="false"/>
                </UFormGroup>
            </div>
            <div style="padding-bottom: 6px; padding-top: 6px;">
                <UFormGroup name="message">
                    <!-- <textarea v-model="contactFormState.message" placeholder="Your message"></textarea> -->
                    <UTextarea v-model="contactFormState.message" placeholder="Your message" />
                </UFormGroup>
            </div>
            <div class="submit-button" v-if="!success">
                <button type="submit" style="background-color: var(--accent-quaternary); height: 32px; font-family: bloop; color: var(--text-secondary); cursor: pointer;" block>
                    <span>SEND</span>
                </button>
                <div v-if="isLoading" class="loading-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><rect width="10" height="10" x="1" y="1" fill="currentColor" rx="1"><animate id="svgSpinnersBlocksShuffle20" fill="freeze" attributeName="x" begin="0;svgSpinnersBlocksShuffle27.end" dur="0.2s" values="1;13"></animate><animate id="svgSpinnersBlocksShuffle21" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle24.end" dur="0.2s" values="1;13"></animate><animate id="svgSpinnersBlocksShuffle22" fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle25.end" dur="0.2s" values="13;1"></animate><animate id="svgSpinnersBlocksShuffle23" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle26.end" dur="0.2s" values="13;1"></animate></rect><rect width="10" height="10" x="1" y="13" fill="currentColor" rx="1"><animate id="svgSpinnersBlocksShuffle24" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle20.end" dur="0.2s" values="13;1"></animate><animate id="svgSpinnersBlocksShuffle25" fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle21.end" dur="0.2s" values="1;13"></animate><animate id="svgSpinnersBlocksShuffle26" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle22.end" dur="0.2s" values="1;13"></animate><animate id="svgSpinnersBlocksShuffle27" fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle23.end" dur="0.2s" values="13;1"></animate></rect></svg>
              </div>
            </div>
            <h4>{{ message}}</h4>
        </UForm>
    </div>
</template>

<script setup lang="ts">
import MessageSchema from '~/schemas/Message.schema';
import type { FormSubmitEvent } from '@nuxt/ui/dist/runtime/types';
import { z } from 'zod';
import { ref } from 'vue';

const isLoading = ref(false);
let message = ref<string>('');
let success = ref<boolean>(false);
let contactFormState = ref({
    name: undefined, 
    contact: undefined,
    company: undefined,
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
        message.value = 'Thanks!';
        success.value = true;
    } catch (error) {
        console.error(error);
        message.value = 'Something went wrong. Please try again.';
    }
}
</script>

<style scoped>
p {
    font-family: bloop;
    font-size: 1.5rem;
    color: var(--text-secondary);
    margin-bottom: 1rem;
    margin-top: 1rem;
}
</style>