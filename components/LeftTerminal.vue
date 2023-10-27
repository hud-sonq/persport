<template>
    <div id="terminal" ref="terminal" class="">
        <div id="fishView" ref="fishView">
            <vue3dLoader v-if="isFishView"
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
    </div>
</template>

<script setup lang="ts">
import { vue3dLoader } from "vue-3d-loader";
import { ref, onMounted } from 'vue';
let fishView = ref<HTMLElement | null>(null);
let terminal = ref<HTMLElement | null>(null);
let cooldownTimeout = null;
let isFishView = ref(true);

const [width, height] = [ref(0), ref(0)];
onMounted(() => {
    width.value = document.querySelector('#terminal')?.parentElement?.clientWidth ?? 512;
    height.value = document.querySelector('#terminal')?.parentElement?.clientHeight ?? 512;
    cooldownTimeout = setTimeout(() => {
        fishView.value?.classList.add('active');
        terminal.value?.classList.add('active');

    }, 2000);
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

#terminal {
    overflow: hidden;
    opacity: 0;
    transition: opacity .6s ease-in-out, border .6s ease-in-out;
}

#terminal.active {
    opacity: 1;
    border: 4px solid var(--ui-primary);
}

#terminal.shrink {
    animation: shrink 3s forwards;
    animation-delay: 0s;
    background-color: white;
    position: absolute;
}

@keyframes shrink {
    0% {
        top: 0;
        left: 0;
        width: 47%;
        height: 96%;
    }
    100% {
        top: 50%;
        left: 25%;
        width: 2%;
        height: 4%;
    }
}

@keyframes expand {
    0% {
        top: 50%;
        left: 25%;
        width: 2%;
        height: 4%;
    }
    100% {
        top: 0;
        left: 0;
        width: 100%;
        height: 97%;
    }
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