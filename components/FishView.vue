<template>
  <div id="fishView" ref="fishView">
    <vue3dLoader
    filePath="../fish/scene.gltf"
    :width="width"
    :height="height"
    :cameraPosition="{ x:0, y:0, z:0}"
    :backgroundColor=0
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
</template>

<script setup lang="ts">
import { vue3dLoader } from "vue-3d-loader";
import { ref, onMounted } from 'vue';
let fishView = ref<HTMLElement | null>(null);
let cooldownTimeout = null;

onMounted(() => {
    cooldownTimeout = setTimeout(() => {
        fishView.value?.classList.add('active');
    }, 2000);
});
const [width, height] = [ref(0), ref(0)];
onMounted(() => {
  width.value = document.querySelector('.fishView')?.parentElement?.clientWidth ?? 512;
  height.value = document.querySelector('.fishView')?.parentElement?.clientHeight ?? 512;
  console.log(width.value, height.value);
});

const enablePan = false;
const enableZoom = false;
const enableRotate = false;
const rotation = ref();
rotation.value = {
  x: 0,
  y: 2,
  z: 0,
};
</script>

<style scoped>

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