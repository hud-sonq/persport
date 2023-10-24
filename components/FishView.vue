<template>
    <div class="FishView">
      <vue3dLoader v-if="showFish===true"
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
import { onMounted } from 'vue';

let showFish: boolean = false;
let fishTimeout: null;
const [width, height] = [ref(0), ref(0)];
onMounted(() => {
  width.value = document.querySelector('.FishView')?.parentElement?.clientWidth ?? 512;
  height.value = document.querySelector('.FishView')?.parentElement?.clientHeight ?? 512;
  console.log(width.value, height.value);
  fishTimeout = setTimeout(() => {
    showFish = true;
  }, 1000);

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