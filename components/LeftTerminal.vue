
<template>
    <div id="terminal" ref="terminal" class="active">
      <div class="deco-bottom-left-container" v-if="showSocialsLinks">
        <div class="bracket-top-right"></div>
        <div class="deco-bottom-left">
          <a href="https://linktr.ee/hudsonjq" target="_blank">
            <img src="/deco/svg/linktree.svg">
          </a>
        </div>
        <div class="deco-bottom-left">
          <a href="https://github.com/hud-sonq" target="_blank">
            <img src="/logos/svg/gh_square.svg">
          </a>
        </div>
      </div>
      <div class="deco-top-left">
        <img src="/deco/svg/uiline1.svg" style="height: 100%; width: 100%; object-fit: contain; filter: invert(1);">
      </div>
      <div class="deco-bottom-right">
        <img src="/deco/svg/uiline1.svg" style="height: 100%; width: 100%; object-fit: contain; filter: invert(1);">
      </div>
      <div class="deco-top-right" v-if="showContactFormDeco" @click="enableForm()" :class="{'deco-blink': !contactFormSeen, 'greyed-out': contactFormSeen}">
        <div class="bracket-bottom-left"></div>
        <img src="/deco/svg/mail1.svg" style="; filter: invert(1);">
      </div>
      <div class="form-container" v-if="showContactForm">
        <div class="form">
          <div class="close-x" @click="enableForm()">
                <div style="padding: 2px;">
                    <img src="/deco/svg/closebox.svg" style="filter: invert(1);">
                </div>
          </div>
          <p>send me a message:</p>
          <ContactForm/>
        </div>
      </div>
      <div class="active house" ref="prlxHouse" @mousemove="parallaxTest" >
        <div>
          <vue3dLoader
          :width="width"
          :height="height"
          :filePath="filepath"
          :cameraPosition="{ x: 35, y: 0, z: 0}"
          :backgroundColor=0
          :backgroundAlpha="0"
          :scale="{x:1, y:1, z:1}"
          :rotation="rotation"
          :cameraFov="160"
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

let terminal = ref<HTMLElement | null>(null);
let prlxHouse = ref<HTMLElement | null>(null);
const route = useRoute();
let showContactFormDeco = ref<Boolean>(true);
let showContactForm = ref<boolean>(false);
let contactFormSeen = ref<boolean>(false);
let showSocialsLinks = ref<boolean>(true);

let basePath = "../scenes/";
let filepath = "";

const [width, height] = [ref(0), ref(0)];

function enableForm() {
  showContactForm.value = !showContactForm.value;
  if (!localStorage.getItem('contactFormSeen') || localStorage.getItem('contactFormSeen') === 'false') {
      localStorage.setItem('contactFormSeen', 'true');
      contactFormSeen.value = true;
  }
}
onMounted(() => {
  width.value = document.querySelector('#terminal')?.parentElement?.clientWidth ?? 512;
  height.value = document.querySelector('#terminal')?.parentElement?.clientHeight ?? 512;
  if (localStorage.getItem('contactFormSeen') === 'true') {
    contactFormSeen.value = true;
  }
  if (route.path === '/') {
    filepath = basePath + "handcube1.glb";
    showContactFormDeco.value = true;
    showSocialsLinks.value = true;
  } else {
    showContactFormDeco.value = false;
    showSocialsLinks.value = false;
  }
  if (route.path === '/graphics') {
    filepath = basePath + "cubezone1.glb";
  }
});

// 3d loader options
const enablePan = false;
const enableZoom = false;
const enableRotate = true;
const rotation = ref();
rotation.value = {
  x: 0,
  y: .55,
  z: .55,
};

const parallaxTest = (e: { clientX: any; clientY: any; }) => {
  let cooldownTimeout = null;
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
.close-x {
  cursor: pointer; 
  position: absolute; 
  right: 0; 
  top: 0; 
  text-align: center; 
  font-size: 16px; 
  font-weight: bold; 
  color: var(--ui-primary);
  padding: 4px
}

.form-container {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: fit-content;
}

.form {
  background: var(--background-primary); 
  border: 4px solid var(--ui-primary); 
  z-index: 2;
  padding: 32px; 
  text-align: center;
  padding: 8px; 
}
.house {
  height: 100%;
  width: 100%;
}

.deco-top-right {
  position: absolute;
  top: 0;
  right: 0;
  margin: 2%;
  height: 30px;
  display: flex;
  justify-content: center;
  cursor: pointer;
}

.deco-top-left {
  position: absolute;
  top: 1%;
  left: -3%;
  width: 35%;
  margin: 1%;
}

.deco-bottom-left-container {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100px;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.deco-bottom-left {
  height: 33px;
  width: 33px;
  cursor: pointer;
  transition: transform .2s ease-in-out;
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

.greyed-out {
  opacity: .5;
}

.bracket-top-right {
  position: absolute;
  top: -5%;
  right: -5%;
  border-right: 4px solid var(--ui-primary);
  border-top: 4px solid var(--ui-primary);
  width: 16px;
  height: 16px;
}

.bracket-bottom-left {
  position: absolute;
  bottom: -30%;
  left: -25%;
  border-left: 4px solid var(--ui-primary);
  border-bottom: 4px solid var(--ui-primary);
  width: 16px;
  height: 16px;
}

</style>