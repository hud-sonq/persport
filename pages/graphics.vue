<template>
  <div class="split-container active">
    <div class="left">
      <div class="image-gallery">
        <VerticalGallery @click="handlePhotoClicked" v-bind="props"/>
      </div>
    </div>
    <div class="right">
      <div class="text-container" v-if="!clickedPhoto">
        <div class="heading-container">
          <h2 class="heading-text stackit-text">Graphics and 3D <img src="/deco/svg/pyramid.svg" style="height: 30px; filter: invert(1);"></h2>
        </div>
        <p style="text-align: center; padding: 12px;">- - - - </p>
        <p>- I like abstract sci fi art! My graphic and 3D design falls under a niche genre of digital art called "metalheart." I am inspired by y2k design and retro imaginations of sci fi environments / UIs.</p>
        <p style="text-align: center; padding: 12px;">- - - - </p>
        <p>- I use Blender for 3D modeling and rendering, Adobe Illustrator for vector work, and Adobe Photoshop for 2d design.</p>
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
    "/2dgallery/compressed/embryosis.png",
    "/2dgallery/compressed/destructivecold-min.png",
    "/2dgallery/compressed/iphone1-min.png",
    "/2dgallery/compressed/water-min.jpg",
    "/2dgallery/compressed/break2-min.jpg",
    "/2dgallery/compressed/entrance-min.png",
    "/2dgallery/compressed/trials-min.png"
  ],
  leftImagesTitles: [
    "EMBRYOSIS",
    "DESTRUCTIVE COLD",
    "IPHONE WALLPAPER 1",
    "SHALLOW WATERS",
    "BREAK!",
    "TRACK COVER 1",
    "TRACK COVER 2"
  ],
  rightImages: [
  "/2dgallery/compressed/init-min.jpg",
  "/2dgallery/compressed/offgrid-min.jpg",
  "/2dgallery/compressed/spacehobbies-min.jpg",
  "/2dgallery/compressed/ako-min.png",
  "/2dgallery/compressed/sc1-min.png",
  "/2dgallery/compressed/0085.png",
  "/2dgallery/compressed/cubedup.png"
  ],
  rightImagesTitles: [
    "INIT",
    "OFF GRID!",
    "SPACE HOBBIES!",
    "SPOTIFY ARTIST BANNER",
    "TRIO",
    "SPACE CANDY",
    "PREP"
  ], 
}

const clickedPhoto = ref(null);
const handlePhotoClicked = (photo: any) => {
  clickedPhoto.value = photo;
}
</script>
  
<style scoped>
@media (max-width: 768px) {
  .right {
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
  margin: 6px;
  border: 4px solid var(--accent-secondary);
}
.heading-container {
  height: 10%;
}
.image-gallery {
  margin: 1%;
}

.text-container {
  padding: 40px 5%;
  overflow: auto;
  height: 100%;
}

.heading-text {
  text-align: center;
}
</style>