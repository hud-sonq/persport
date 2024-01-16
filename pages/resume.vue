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
              <div class="bracket-top-left"></div>
              <div class="bracket-bottom-right"></div>
              <div class="title">
                <h1> About </h1>
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
          <div class="social-links">
            <div class="bracket-top-right"></div>
            <div class="social">
              <div>
                <a href="https://github.com/hud-sonq/" target="_blank">
                  <img src="/logos/svg/gh_white.svg" style="height: 32px;">
                </a>
              </div>
            </div>
            <div class="social">
              <div>
                <a href="https://www.linkedin.com/in/hudsonquatro/" target="_blank">
                  <img src="/logos/svg/linkedin.svg" style="height: 32px;">
                </a>
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

.bracket-top-right {
  position: absolute;
  border-right: 4px solid var(--ui-primary);
  border-top: 4px solid var(--ui-primary);
  top: -50%;
  right: -4%;
  height: 16px;
  width: 16px;
}

.social-links {
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100px;
  height: 32px;
  padding-bottom: 6px;
}

.social {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 32px;
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
  padding-left: 4px;
  text-align: left;
  width: 100%;
}

.item .ku {
  color: red;
}

.item .sw {
  color: var(--sewanee-purple);
}

@media (max-width: 768px) {
  .left {
    display: none;
  }
  .bracket-bottom-right {
    display: none;
  }
  .bracket-top-left {
    display: none;
  }
}
</style>