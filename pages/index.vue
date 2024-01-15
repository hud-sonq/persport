<template>
  <div class="split-container active">
    <div class="left stackit">
        <LeftTerminal/>
    </div>
    <div class="right stackit" style="overflow: hidden;">
        <Welcome />
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 768px) {
  .split-container {
    flex-direction: column;
  }
}
</style>