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
              <div class="bracket-top-left">
              </div>
              <div class="bracket-bottom-right">
              </div>
              <div class="title">
                <h1> Resume </h1>
              </div>
              <div class="item">
                <h4>- <a class="sw" href="https://new.sewanee.edu/" target="_blank">sewanee</a> c'23 | 3.11 gpa </h4>
              </div>
              <div class="item">
                <h4>- <a class="ku" href="https://summer.korea.ac.kr/summer/index.do" target="_blank">KU ISC</a> 2022 | AI and 한글 </h4>
              </div>
              <div class="item">
                <h4>- 2yr in food service </h4>
              </div>
              <div class="item">
                <h4>- 1yr as web developer </h4>
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

h4 {
  margin: 0;
}
.resume-container {
  height: 100%;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.resume {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50%;
  width: 100%;
}

.bracket-top-left {
  position: absolute;
  border-left: 4px solid var(--ui-primary);
  border-top: 4px solid var(--ui-primary);
  top: -10%;
  left: -2%;
  height: 20px;
  width: 20px;
}

.bracket-bottom-right {
  position: absolute;
  border-right: 4px solid var(--ui-primary);
  border-bottom: 4px solid var(--ui-primary);
  bottom: -6%;
  right: -5%;
  height: 20px;
  width: 20px;
}

.title {
  text-align: center;
}

.many-items {
  display: block;
  position: absolute;
}

.item {
  display: flex;
  padding-top: 8px;
  padding-bottom: 8px;
  text-align: left;
  width: 100%;
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