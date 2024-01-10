<template>
  <div class="svg-grid">
  </div>
</template>

<script lang="ts" setup>

</script>

<style>
.svg-grid {
  z-index: -1000;
  position: absolute;
  height: 300%;
  width: 300%;
  background-image: url('/deco/svg/cloud.svg');
  background-repeat: repeat;
  background-size: 32px 32px; /* Adjust as needed */
  filter: invert(1);
  transform: rotate(33deg);
  overflow: hidden;
}
</style>