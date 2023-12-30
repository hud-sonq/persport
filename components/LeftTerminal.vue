<template>
    <div id="terminal" ref="terminal" class="active">
      <div class="qr-bottom-left">
        <img src="/deco/png/linktree.png" style="height: 100%; width: 100%; object-fit: contain; filter: invert(1);">
      </div>
      <div class="deco-top-left">
        <img src="/deco/svg/uiline1.svg" style="height: 100%; width: 100%; object-fit: contain; filter: invert(1);">
      </div>
      <div class="deco-bottom-right">
        <img src="/deco/svg/uiline1.svg" style="height: 100%; width: 100%; object-fit: contain; filter: invert(1);">
      </div>
      <div class="active house" ref="prlxHouse" @mousemove="parallaxTest" >
        <div>
          <img v-if="tempSoundPage" src="/deco/svg/sound_icon.svg" style="height: 100%; width: 100%; object-fit: contain; filter: invert(1);">
          <img v-if="resumeIconPage" src="/deco/svg/guy_icon.svg" style="height: 100%; width: 100%; object-fit: contain; filter: invert(1);">
          <vue3dLoader
          :width="width"
          :height="height"
          :filePath="filepath"
          :cameraPosition="{ x: 35, y:0, z: 0}"
          :backgroundColor=0
          :backgroundAlpha="0"
          :scale="{x:1, y:1, z:1}"
          :rotation="rotation"
          :controlsOptions="{
          enablePan,
          enableZoom,
          enableRotate,
          }"
          :autoplay="false"
          style="width: 100%; height: 100%"
          />
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import { vue3dLoader } from "vue-3d-loader";
import { ref, onMounted } from 'vue';
import { boolean } from "zod";
let resizedBefore = false;
let terminal = ref<HTMLElement | null>(null);
let prlxHouse = ref<HTMLElement | null>(null);
let cooldownTimeout = null;
const route = useRoute();

let resumeIconPage = false;
let tempSoundPage = false;
let basePath = "../scenes/";
let filepath = "";

const [width, height] = [ref(0), ref(0)];
onMounted(() => {
    window.addEventListener('resize', () => {
      resizedBefore = true;
    });
    width.value = document.querySelector('#terminal')?.parentElement?.clientWidth ?? 512;
    height.value = document.querySelector('#terminal')?.parentElement?.clientHeight ?? 512;
    if (route.path === '/') {
      filepath = basePath + "handcube1.glb";
    }
    if (route.path === '/resume') {
      resumeIconPage = true;
    }
    if (route.path === '/auth/account') {
      filepath = basePath + "blueball.glb";
    }
    if (route.path === '/sound') {
      tempSoundPage = true;
    }
});


const enablePan = false;
const enableZoom = false;
const enableRotate = false;
const rotation = ref();


rotation.value = {
  x: 0,
  y: .55,
  z: .55,
};

const parallaxTest = (e: { clientX: any; clientY: any; }) => {
  cooldownTimeout = setTimeout(() => {
    const x = e.clientX;
    const w = window.innerWidth/4;
    const h = window.innerHeight/4;
    const xPercent = x / w;
    const xDeg = xPercent * .3;
    rotation.value = {
      x: 0,
      y: xDeg,
      z: xDeg,
    };
  }, 50);
};
</script>

<style scoped>

.house {
  height: 100%;
  width: 100%;
}

.deco-top-right {
  position: absolute;
  top: 0;
  right: 0;
  height: 130px;
  display: flex;
  justify-content: center;
  border: 4px solid var(--ui-primary);
  overflow: hidden;
}

.deco-top-left {
  position: absolute;
  top: 1%;
  left: -3%;
  width: 35%;
  margin: 1%;
}

.qr-bottom-left {
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 2%;
  width: 8%;
}

.deco-bottom-right {
  position: absolute;
  bottom: 0;
  right: -3%;
  margin: 2%;
  width: 35%;
  transform: rotate(180deg);

}

#terminal {
  overflow: hidden;
  opacity: 0;
  transition: opacity .6s ease-in-out, border .6s ease-in-out;
  height: 100%;
  width: 100%;
}

#terminal.active {
  opacity: 1;
}

#fishView {
  opacity: 0;
  transition: opacity 2s ease-in-out;
  height: 100%;
  width: 100%;
}

#fishView.active {
  opacity: 1;
  height: 100%;
  width: 100%;
}

</style>