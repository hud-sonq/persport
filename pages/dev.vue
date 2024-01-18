<template>
  <div>
    <div class="split-container active">
      <div class="left" ref="leftDev" style="display: flex; flex-direction: column;">
        <DevExperience v-bind="projectProps" @go-to-weather="goToWeather()" />
      </div>
      <div class="right" ref="rightDev" style="overflow: hidden;">
        <IconWallpaper v-bind="wallpaperProps" />
        <WeatherBox/>
      </div>
    </div>
  </div>
</template>
  
<script lang="ts" setup>
const projectProps = {
  titles: ['this website', 'accountonomics', 'dino\'s ocean cleanup', 'skybox'],
  subtitles: ['the site you\'re on', 'frontend developer', 'sound design, map design', 'a project from university'],
  paragraphStarts: ['made with vue.js. ', 'my current project of focus.', 'a 2d platformer made with pygame. ', 'made with processing. '],
  paragraphs: ['Represents my abilities with html, css, typescript, nuxt, and mongoDB.', ' Also built with Vue. In February 2023 I began to assist with development; So far I\'ve added a glossary center, a working journal entry component, a dark mode, and several bug fixes / general UX improvements', 'Dino\'s ocean cleanup is a 2d platformer game that me and a friend made at a hackathon. I was responsible for the music, sfx, map design, animations, and implementations.', 'Just a few cubes that react to audio tracks.'],
  images: ['/deco/png/site_dev.png', '/deco/png/acnt_synopsis.png', '/deco/gif/doc_gameplay.gif', '/deco/png/skybox.png'],
  decos: ['/logos/svg/gh_white.svg', '/deco/png/acnt_loading.gif', '/deco/png/dino.png', '/logos/svg/gh_white.svg'],
  decoHrefs: ['https://github.com/hud-sonq/persport', 'https://accountonomics.com', 'https://devpost.com/software/dino-s-ocean-cleanup', 'https://github.com/hud-sonq/skybox']
}

const wallpaperProps = {
  image: '/deco/svg/cloud.svg',
  angle: 33
};

// the rest of this script is for mobile users only
const leftDev =  ref<HTMLElement | null>(null);;
const rightDev =  ref<HTMLElement | null>(null);;
function goToWeather() {
  if (leftDev.value) {
    leftDev.value.style.display = 'none';
  }
  if (rightDev.value) {
    rightDev.value.style.display = 'flex';
    rightDev.value.style.marginBottom = '112px';
  }
}
</script>
  
  
<style scoped>
@media (max-width: 768px) {
  .split-container {
    flex-direction: column;
  }
  .right {
    display: none;
  }
  .left {
    position: relative;
    margin-bottom: 112px;
    padding-right: 5px;
    max-width: 90%;
  }
}
</style>