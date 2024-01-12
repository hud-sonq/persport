<template>
  <div class="svg-grid" :style="{'background-image': `url(${props.image})`, transform: `rotate(${props.angle}deg)`}"></div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  image: string;
  angle: number;
}>()
</script>

<style>
.svg-grid {
  z-index: -1000;
  position: fixed;
  height: 300%;
  width: 300%;
  background-repeat: repeat;
  background-size: 32px 32px; /* Adjust as needed */
  filter: invert(1);
  transform: rotate(33deg);
  overflow: hidden;
}
</style>