<template>
  <div style="border: 4px solid var(--ui-primary); padding: 24px; background: var(--accent-primary);">
    <h1>{{title}}</h1>
    <slot />
  </div>
</template>

<script lang="ts" setup>
interface Props {
  title: string;
}
defineProps<Props>()

</script>

<style>

</style>