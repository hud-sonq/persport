<template>
  <div class="split-container active">
    <div class="left">
      <div class="click-to-view-container"  @click="viewable = !viewable" v-if="!viewable">
        <div class="v3d-container">
          <LeftTerminal />
        </div>
        <div class="click-to-view">
          <div>
            <h4>view gallery</h4>
          </div>
          <div style="padding-left: 8px;">
            <img src="/deco/svg/bang.svg" style="filter: invert(1); height: 16px;">
          </div>
        </div>
      </div>
      <div class="image-gallery" v-if="viewable">
        <h4 class="mobile-tip" style="padding-top: 8px; padding-bottom: 8px;">tap an image to see the title</h4>
        <h4 class="desktop-tip" style="padding-top: 8px; padding-bottom: 8px;">hover an image to see the title</h4>
        <VerticalGallery @click="handlePhotoClicked" v-bind="props"/>
      </div>
    </div>
    <div class="right">
      <div v-if="!clickedPhoto">
        <div class="deco-top-left">
          <img src="/deco/svg/uiline1.svg" style="height: 100%; width: 100%; object-fit: contain; filter: invert(1);">
        </div>
        <div class="deco-bottom-right">
          <img src="/deco/svg/uiline1.svg" style="height: 100%; width: 100%; object-fit: contain; filter: invert(1);">
        </div>
      </div>
      <div class="bullets" v-if="!clickedPhoto">
        <div style="text-align: center; padding-bottom: 16px; border-bottom: 2px solid var(--ui-primary)">
            <h2>Graphics and 3D <img src="/deco/svg/pyramid.svg" style="height: 30px; filter: invert(1);"></h2>
        </div>
        <p style="padding-bottom: 16px; padding-top: 16px; border-bottom: 2px solid var(--ui-primary)">- abstract sci fi art</p>
        <p style="padding-bottom: 16px; padding-top: 16px; border-bottom: 2px solid var(--ui-primary)">- logo design</p>
        <p style="padding-bottom: 16px; padding-top: 16px; border-bottom: 2px solid var(--ui-primary)">- 3D modeling</p>
        <p style="padding-bottom: 16px; padding-top: 16px; border-bottom: 2px solid var(--ui-primary)">- vector work</p>
        <p style="padding-bottom: 16px; padding-top: 16px; border-bottom: 2px solid var(--ui-primary)">- Adobe suite, blender </p>
      </div>
      <div class="large-lightroom" v-if="clickedPhoto">
        <div class="image-itself">
          <div class="close-button" @click="clickedPhoto = null">
            <img src="/deco/svg/closebox.svg" style="height: 30px; filter: invert(1);">
          </div>
          <img :src="clickedPhoto" style="width: 100%; height: 100%;"/>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup lang="ts">
const props = {
  leftImages: [
    "/2dgallery/compressed/customize.jpg",
    "/2dgallery/compressed/embryosis.png",
    "/2dgallery/compressed/destructivecold-min.png",
    "/2dgallery/compressed/greenalpaca.png",
    "/2dgallery/compressed/iphone1-min.png",
    "/2dgallery/compressed/water-min.jpg",
    "/2dgallery/compressed/break2-min.jpg",
    "/2dgallery/compressed/koipondxyz.png",
    "/2dgallery/compressed/entrance-min.png",
    "/2dgallery/compressed/trials-min.png"
  ],
  leftImagesTitles: [
    "CUSTOMIZE",
    "EMBRYOSIS",
    "DESTRUCTIVE COLD",
    "GREEN ALPACA LOGO",
    "IPHONE WALLPAPER 1",
    "SHALLOW WATERS",
    "BREAK!",
    "KOIPOND.XYZ OLD LOGO",
    "TRACK COVER 1",
    "TRACK COVER 2"
  ],
  rightImages: [
  "/2dgallery/compressed/guidance.png",
  "/2dgallery/compressed/kpgif.gif",
  "/2dgallery/compressed/customize_v.jpg",
  "/2dgallery/compressed/init-min.jpg",
  "/2dgallery/compressed/offgrid-min.jpg",
  "/2dgallery/compressed/spacehobbies-min.jpg",
  "/2dgallery/compressed/ako-min.png",
  "/2dgallery/compressed/sc1-min.png",
  "/2dgallery/compressed/0085.png",
  "/2dgallery/compressed/cubedup.png",
  "/2dgallery/compressed/scs.png",
  "/2dgallery/compressed/kpbanner.png",
  ],
  rightImagesTitles: [
    "GUIDANCE",
    "KOIPOND.XYZ GIF",
    "CUSTOMIZE 2",
    "INIT",
    "OFF GRID!",
    "SPACE HOBBIES!",
    "SPOTIFY ARTIST BANNER",
    "TRIO",
    "SPACE CANDY",
    "PREP",
    "SEWANEE COMPUTING SOCIETY",
    "KOIPOND.XYZ BANNER"
  ],
}

const viewable = ref(false);

const clickedPhoto = ref(null);
const handlePhotoClicked = (photo: any) => {
  clickedPhoto.value = photo;
}
</script>
  
<style scoped>
.v3d-container {
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: -1;
  pointer-events: none;
}
.deco-top-left {
  position: absolute;
  top: 1%;
  left: -3%;
  width: 35%;
  margin: 1%;
}

.deco-bottom-right {
  position: absolute;
  bottom: 0;
  right: -3%;
  margin: 2%;
  width: 35%;
  transform: rotate(180deg);
}
.mobile-tip {
  display: none;
}

.bullets {
  padding: 16px;
  border: 4px solid var(--ui-primary);
}

.click-to-view-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
}

.click-to-view {
  display: flex;
  flex-direction: row;
  border: 2px solid var(--ui-primary);
  padding: 8px;
  margin: 50px;
  margin-top: 35%;
}
.right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
@media (max-width: 768px) {
  .right {
    display: none;
  }
  .left {
    margin-bottom: 112px;
  }
  .mobile-tip {
    display: block;
  }
  .desktop-tip {
    display: none;
  }
}

.close-button {
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
}

.large-lightroom {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 80%;
}

.image-itself {
  padding: 4px;
  border: 2px solid var(--accent-secondary);
}
.heading-container {
  height: 10%;
  width: 100%;
  position: fixed;
}
.image-gallery {
  margin: 1%;
  height: 100%;
}

.text-container {
  padding: 40px 5%;
  overflow: auto;
  height: 10%;
  width: 100%;
}

.heading-text {
  text-align: center;
}
</style>