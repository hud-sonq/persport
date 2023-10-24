<template>
  <div class="split-container">
    <div class="left">
      <LeftTerminal />
    </div>
    <div class="right">
      <Welcome />
    </div>
  </div>
  <div class="centered-bar"></div>
</template>

<script lang="ts" setup>
</script>


<style>

body {
    background-color: var(--background-primary);
    overflow: hidden;
}

.split-container {
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
}

.left {
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 3%;
}

.right {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin: 3%;
}


.centered-bar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 10px;
  background-color: rgb(255, 255, 255);
}


</style>