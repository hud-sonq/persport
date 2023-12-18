<template>
  <div class="slider-top" ref="slider" id="slider">
    <div v-for="logo in images1" :key="logo" style="width: 18%;">
      <div class="logo-item">
        <img :src="logo" alt="" class="logo-image"/>
      </div>
    </div>
  </div>
  <div class="slider-bottom" ref="slider" id="slider">
    <div v-for="logo in images2" :key="logo" style="width: 18%;">
      <div class="logo-item">
        <img :src="logo" alt="" class="logo-image"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const images1 = ref(['/logos/svg/adobe_pr.svg', '/logos/svg/adobe_ps.svg', '/logos/svg/blender.svg', '/logos/svg/css3.svg', '/logos/svg/gh_white.svg', '/logos/svg/js.svg']);
const images2 = ref(['/logos/svg/mongo.svg', '/logos/svg/nuxtjs.svg', '/logos/svg/python.svg', '/logos/svg/ts.svg', '/logos/svg/vuejs.svg', 'logos/svg/gpt.svg'])
let slider = ref<HTMLElement | null>(null);
</script>

<style>
.slider-top {
  position: absolute;
  top: 13%;
  display: flex;
  flex-direction: row;
  height: 8%;
  width: 100%;
  overflow: hidden;
}

.slider-bottom {
  position: absolute;
  bottom: 13%;
  display: flex;
  flex-direction: row;
  height: 8%;
  width: 100%;
  overflow: hidden;
}

.logo-item {
  height: 100%;
  display: flex;
  align-items: center;
}


.logo-image {
  height: 100%;
  width: 100%;
  object-fit: contain;
  padding: 4px;
  border: 2px white;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>