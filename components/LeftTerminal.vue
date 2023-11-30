<template>
    <div id="terminal" ref="terminal" class="active">
        <div class="active" ref="prlxHouse" @mousemove="parallaxTest">
            <vue3dLoader 
            :filePath="filepath"
            :width="width"
            :height="height"
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
            />
        </div>
        <div class="qr-bottom-left">
          <img src="../assets/decos/qr/linktree.png" style="height: 100%; width: 100%; object-fit: contain; filter: invert(1);">
        </div>
        <div class="graph-top-left">
          <img src="../assets/decos/svg/graph1.svg" style="height: 100%; width: 100%; object-fit: contain; filter: invert(1);">
        </div>
    </div>
</template>

<script setup lang="ts">
import { vue3dLoader } from "vue-3d-loader";
import { ref, onMounted } from 'vue';
let terminal = ref<HTMLElement | null>(null);
let cooldownTimeout = null;
const route = useRoute();

let basePath = "../nate/";
let filepath = "";

const [width, height] = [ref(0), ref(0)];
onMounted(() => {
    width.value = document.querySelector('#terminal')?.parentElement?.clientWidth ?? 512;
    height.value = document.querySelector('#terminal')?.parentElement?.clientHeight ?? 512;
    if (route.path === '/') {
      filepath = basePath + "handcube1.glb";
    }
    if (route.path === '/resume') {
      filepath = basePath + "blueball.glb";
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
    console.log(xDeg);
    rotation.value = {
      x: 0,
      y: xDeg,
      z: xDeg,
    };
  }, 50);
};




</script>

<style scoped>

.graph-top-left {
  position: absolute;
  top: 0;
  left: 0;
  width: 20%;
  height: 20%;
  margin: 1%;
}

.qr-bottom-left {
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 2%;
  width: 8%;
}

#terminal {
    overflow: hidden;
    opacity: 0;
    transition: opacity .6s ease-in-out, border .6s ease-in-out;
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