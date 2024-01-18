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
  z-index: -1;
  position: fixed;
  top: -20%;
  height: 150%;
  width: 200%;
  background-repeat: repeat;
  background-size: 32px 32px; /* Adjust as needed */
  filter: invert(1);
  transform: rotate(33deg);
  overflow: hidden;
}
</style>