<template>
  <div>
    <div class="split-container active">
      <div class="left" ref="leftDev" style="display: flex; flex-direction: column;"  v-on:scroll="handleScroll">
        <DevExperience v-bind="projectProps" @go-to-weather="goToWeather()" />
        <div class="scroll-down" ref="scrollDown" v-show="hasntScrolled">
          <h2 style="color: white;">SCROLL</h2>
          <img src="/deco/svg/arrowDown.svg" style="height: 42px;">
        </div>
      </div>
      <div class="right" ref="rightDev" style="overflow: hidden;">
        <IconWallpaper v-bind="wallpaperProps" />
        <WeatherBox/>
      </div>
    </div>
  </div>
</template>
  
<script lang="ts" setup>
let hasntScrolled = ref(true);
function handleScroll() {
  hasntScrolled.value = false;
}

const projectProps = {
  titles: ['this website', 'green alpaca', 'accounto - nomics', 'dino\'s ocean cleanup', 'skybox'],
  subtitles: ['full stack developer', 'full stack developer', 'junior developer', 'sound design, map design', 'a project from university'],
  paragraphStarts: ['Made with vue.js.', 'Development is paused till we can get more inventory.', `An app I've been rejuvenating.`, 'A 2d platformer made with pygame. ', 'Made with processing. '],
  paragraphs: [' Represents my abilities with html, css, typescript, nuxt, and mongoDB.', ' Also built with Vue. Green Alpaca is an upcoming clothing botique and webshop, using typescript APIs and mongoose and processing money with paypal.', ' Also built with Vue. In February 2023 I began to assist with development; So far I\'ve added a glossary center, a working journal entry component, a dark mode, and several bug fixes / general UX improvements', 'Dino\'s ocean cleanup is a 2d platformer game that me and a friend made at a hackathon. I was responsible for the music, sfx, map design, animations, and implementations.', 'Just a few cubes that react to audio tracks.'],
  images: ['/deco/png/site_dev.png', '/deco/png/galpaca_campaign.png', '/deco/png/acnt_synopsis.png','/deco/gif/doc_gameplay.gif', '/deco/png/skybox.png'],
  decos: ['/logos/svg/gh_white.svg', '/logos/svg/gh_white.svg', '/deco/png/acnt_loading.gif', '/deco/png/dino.png', '/logos/svg/gh_white.svg'],
  decoHrefs: ['https://github.com/hud-sonq/persport', 'https://github.com/hud-sonq/greenalpaca/tree/wip-branch', 'https://accountonomics.com', 'https://devpost.com/software/dino-s-ocean-cleanup', 'https://github.com/hud-sonq/skybox']
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

.scroll-down {
  background: black;
  padding: 4px;
  border-top: 4px solid var(--accent-primary);
  border-right: 4px solid var(--accent-primary);
  border-left: 4px solid var(--accent-primary);
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
@media (max-width: 768px) {
  .split-container {
    flex-direction: column;
  }
  .right {
    display: none;
  }
  .left {
    position: relative;
  }
}
</style>