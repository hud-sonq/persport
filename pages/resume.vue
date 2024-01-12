<template>
  <div>
    <div class="split-container active">
      <div class="left" style="overflow: hidden;">
        <IconWallpaper v-bind="wallpaperProps" />
      </div>
      <div class="right">
        <div class="resume-container">
          <div class="resume">
            <div class="many-items">
              <div class="title">
                <h1> Resume </h1>
              </div>
              <div class="item">
                <h4>- <a class="sw" href="https://new.sewanee.edu/" targer="_blank">sewanee</a> c'23 | 3.11 gpa </h4>
              </div>
              <div class="item">
                <h4>- <a class="ku" href="https://summer.korea.ac.kr/summer/index.do" target="_blank">KU ISC</a> 2022 | AI and 한글 </h4>
              </div>
              <div class="item">
                <h4>- 2yr in food service </h4>
              </div>
              <div class="item">
                <h4>- 1yr as web dev </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script lang="ts" setup> 
const wallpaperProps = {
  image: '/deco/svg/guy_icon.svg',
  angle: 33
}
</script>
  
<style scoped>
@media (max-width: 768px) {
  .left {
    display: none;
  }
}

.resume-container {
  height: 100%;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5%;
}

.resume {
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid var(--ui-primary);
}

.title {
  text-align: center;
}

.item {
  display: flex;
  padding: 8px;
  text-align: center;
}

.item .ku {
  color: red;
}

.item .sw {
  color: var(--sewanee-purple);
}

.logos {
  opacity: 0.3;
}
</style>