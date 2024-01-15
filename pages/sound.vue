<template>
  <div>
    <div class="split-container active">
      <div class="left stackit" style="overflow: hidden;">
        <IconWallpaper v-bind="wallpaperProps" />
      </div>
      <div class="right stackit">
        <h1> Sound </h1>
        <h1> Page </h1>
        <h1> Coming </h1>
        <h1> Soon </h1>
      </div>
    </div>
  </div>
</template>
  
<script lang="ts" setup>
const wallpaperProps = {
  image: '/deco/svg/sound_icon.svg',
  angle: -40
}
</script>


<style scoped>
@media (max-width: 768px) {
  .left {
    display: none;
  }
}
</style>