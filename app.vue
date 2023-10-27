<template>
  <NavBar />
  <div class="split-container active">
    <div class="left">
      <!-- <NavBar /> -->
      <LeftTerminal/>
    </div>
    <div class="right">
      <NuxtPage />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { vue3dLoader } from "vue-3d-loader";
import { ref, onMounted } from 'vue';

let cooldownTimeout = null;
let bar = ref<HTMLElement | null>(null);
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
    width = (window.innerWidth);
    height = (window.innerHeight);
    console.log(`Width: ${width}, Height: ${height}`);
  }, 250)
);

onMounted(() => {
  cooldownTimeout = setTimeout(() => {
      bar.value?.classList.add('active');
  }, 2000);
});
</script>


<style>

body {
    background-color: var(--background-primary);
    overflow: hidden;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.split-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  max-height: 100vh;
  overflow: auto;
  opacity: 0;
}

.split-container.active {
  opacity: 1;
}

.left {
  display: flex;
  flex-direction: column;
  margin: 3%;
  max-width: 100%;
  overflow-x: hidden;
}

.right {
  display: flex;
  flex-direction: column;
  margin: 3%;
  max-width: 100%;
  overflow-x: hidden;
}


.centered-bar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 4px;
  background-color: rgb(255, 255, 255);
  opacity: 0;
  transition: opacity 1.8s ease-in-out;
}

.centered-bar.active {
  opacity: 1;
}



</style>