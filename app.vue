<template>
  <div class="split-container">
    <div class="left">
      <LeftTerminal />
    </div>
    <div class="right">
      <NuxtPage />
    </div>
  </div>
  <div class="centered-bar"></div>
</template>

<script lang="ts" setup>
let width = window.innerWidth;
let height = window.innerHeight;

function debounce<T>(func: (this: T, ...args: any[]) => any, wait: number, immediate?: boolean) {
  let timeout: NodeJS.Timeout | null;
  return function(this: T) {
    let context = this,
      args = Array.from(arguments);
    let later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout as NodeJS.Timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

window.addEventListener(
  "resize",
  debounce(function() {
    width = window.innerWidth;
    height = window.innerHeight;
    console.log(`Width: ${width}, Height: ${height}`);
  }, 250)
);
</script>


<style>

body {
    background-color: var(--background-primary);
    overflow: hidden;
}

.split-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
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
  flex: 1;
  margin: 3%;
}


.centered-bar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 4px;
  background-color: rgb(255, 255, 255);
}


</style>