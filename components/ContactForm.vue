<template>
    <form @submit.prevent="submitForm">
        <div style="display: flex; flex-direction: column;">
            <textarea v-model="message" required></textarea>
            <button type="submit" style="margin-top: 12px;">Submit</button>
        </div>
    </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const message = ref('');

function submitForm() {
    console.log(message.value);
}

</script>