<template>
    <form @submit.prevent="submitForm">
        <div style="display: flex; flex-direction: column;">
            <label for="name"><p>Name:</p></label>
            <input type="text" v-model="name" required>
            <label for="email"><p>Email:</p></label>
            <input type="email" v-model="email" required>
            <label for="message"><p>Message:</p></label>
            <textarea v-model="message" required></textarea>
            <button type="submit" style="margin-top: 12px;">Submit</button>
        </div>
    </form>
</template>

<script setup lang="ts">

</script>