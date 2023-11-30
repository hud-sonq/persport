<template>
  <NavBar />
  <!-- <div class="loading-container" ref="loadingIcon" v-if="loading">
    <h1 style="color: white;">LOADING</h1>
  </div> -->
  <div ref="mainPage" id="main" class="">
    <NuxtPage/>
  </div>
</template>

<script lang="ts" setup>
import { vue3dLoader } from "vue-3d-loader";
import { ref, onMounted, watch } from 'vue';

let cooldownTimeout = null;
let bar = ref<HTMLElement | null>(null);
let loadingIcon = ref<HTMLElement | null>(null);
let mainPage = ref<HTMLElement | null>(null);
let width = window.innerWidth;
let height = window.innerHeight;
let loading = ref(false);

const route = useRoute();

onMounted(() => {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  console.log(isMobile);

  if (isMobile) {
    // Add CSS for mobile devices
    const style = document.createElement('style');
    style.innerHTML = `
      body {
        background-color: #ffffff;
      }
    `;
    document.head.appendChild(style);
  }
});
// watch(() => route.path, () => {
//   console.log(route.path);
//   mainPage.value?.classList.add('load-engaged');
//   loading.value = true;
//   setTimeout(() => {
//     mainPage.value?.classList.remove('load-engaged');
//     loading.value = false;
//   }, 1000);
// },);

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
  animation: pageOut 1s;
}

.page-enter-active {
  animation: pageOut 1.2s reverse;
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
    transform: scale(.2);
    opacity: 1;
    rotate: 0deg;
  }
  55% {
    background-color: white;
    filter: brightness(500);
    transform: scale(.2);
    opacity: 1;
  }
  60% {
    background-color: white;
    filter: brightness(500);
    transform: scale(.2);
    opacity: 1;
  }
  65% {
    background-color: white;
    filter: brightness(500);
    transform: scale(.2);
    opacity: 0;
  }
  70% {
    background-color: white;
    filter: brightness(500);
    transform: scale(.2);
    opacity: 1;
  }
  75% {
    background-color: white;
    filter: brightness(500);
    transform: scale(.2);
    opacity: 0;
  }
  80% {
    background-color: white;
    filter: brightness(500);
    transform: scale(.2);
    opacity: 1;
    rotate: 180deg;
  }
  100% {
    transform: scale(.2);
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