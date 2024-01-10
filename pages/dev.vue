<template>
  <div>
    <div class="split-container active">
      <div class="left stackit" style="display: flex; flex-direction: column;">
        <DevProjects2d />
      </div>
      <div class="right stackit" style="overflow: hidden;">
        <WeatherWallpaper />
        <WeatherBox/>
      </div>
    </div>
  </div>
</template>
  
<script lang="ts" setup>

</script>
  
  
<style scoped>
@media (max-width: 768px) {
  .split-container {
    flex-direction: column;
  }
  .right {
    display: none;
  }
  .left {
    margin: 0;
  }
}
</style>