<template>
  <div class="slider" ref="slider" id="slider">
    <div v-for="logo in images">
      <div class="logo-item">
        <img :src="logo" alt="" class="logo-image"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const images = ref(['/logos/svg/adobe_pr.svg', '/logos/svg/adobe_ps.svg', '/logos/svg/blender.svg', '/logos/svg/css3.svg', '/logos/svg/gh_white.svg', '/logos/svg/js.svg', '/logos/svg/mongo.svg', '/logos/svg/nuxtjs.svg', '/logos/svg/python.svg', '/logos/svg/ts.svg', '/logos/svg/vuejs.svg']);
let slider = ref<HTMLElement | null>(null);
</script>

<style>
.slider {
  position: absolute;
  top: 10%;
  display: flex;
  flex-direction: row;
  height: 10%;
  width: 100%;
  overflow: hidden;
}

.logo-item {
  height: 100%;
  width: 96px;
  display: flex;
  align-items: center;
}


.logo-image {
  height: 100%;
  width: 100%;
  object-fit: contain;
  padding: 4px;
}

@keyframes slide {
    0% {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
        visibility: visible;
    }
    100% {
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
    }
}
</style>