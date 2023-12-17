<template>
  <NavBar />
  <div id="main" ref="main" class="">
    <NuxtPage />
  </div>
</template>

<script lang="ts" setup>
import { vue3dLoader } from "vue-3d-loader";
import { ref, onMounted, watch } from 'vue';

let main = ref<HTMLElement | null>(null);

onMounted(() => {
  let mainElement = main.value as HTMLElement;
  mainElement.classList.add('load-engaged');
  setTimeout(() => {
    mainElement.classList.remove('load-engaged');
  }, 1000);
});


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
</script>


<style>
.load-engaged {
  animation: pageOut 1s reverse;
  animation-iteration-count: 1;
}

#main {
  opacity: 1;
}
/* .page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
} */

.page-leave-active {
  animation: pageOut .6s;
}

.page-enter-active {
  animation: pageOut .6s reverse;
}


@keyframes pageOut {
  0% {
    transform: scale(1);
    opacity: 1;
    rotate: 0deg;
  }
  50% {
    background-color: white;
    filter: brightness(500);
    transform: scale(.04);
    opacity: 1;
    rotate: 0deg;
  }
  55% {
    background-color: white;
    filter: brightness(500);
    transform: scale(.04);
    opacity: 1;
  }
  60% {
    background-color: white;
    filter: brightness(500);
    transform: scale(.04);
    opacity: 1;
  }
  65% {
    background-color: white;
    filter: brightness(500);
    transform: scale(.04);
    opacity: 0;
  }
  70% {
    background-color: white;
    filter: brightness(500);
    transform: scale(.04);
    opacity: 1;
  }
  75% {
    background-color: white;
    filter: brightness(500);
    transform: scale(.04);
    opacity: 0;
  }
  80% {
    background-color: white;
    filter: brightness(500);
    transform: scale(.04);
    opacity: 1;
    rotate: 180deg;
  }
  100% {
    transform: scale(.04);
    background-color: white;
    filter: brightness(500);
    opacity: 1;
    rotate: 180deg;
  }
}


#main.load-engaged {
  opacity: 0;
}

.loading-container {
  height: 100vh;
  width: 90vw;
  display: flex;
  margin: 3%;
  padding-bottom: 5%;
  justify-content: center;
  align-items: center;
  border: 4px solid white;
  opacity: 1;
}


body {
  background-color: var(--background-primary);
  overflow: hidden;
}
</style>