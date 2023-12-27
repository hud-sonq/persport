<template>
  <div class="split-container active">
    <div class="left">
      <div class="test">
        <HorizontalGallery v-bind="props" />
        <VerticalGallery v-bind="props"/>
      </div>
    </div>
    <div class="right">
      <div class="text-container">
        <h2 class="heading-text stackit-text">Graphics and 3D</h2>
        <p style="text-align: center; padding: 12px;">- - - - </p>
        <p>- My graphic / 3D design falls under a niche genre of digital art called "metalheart." I am inspired by y2k design and retro imaginations of sci fi environments / UIs.</p>
        <p style="text-align: center; padding: 12px;">- - - - </p>
        <p>- I use Blender for 3D modeling and rendering, Adobe Illustrator for vector work, and Adobe Photoshop for 2d design.</p>
        <p style="text-align: center; padding: 12px;">- - - - </p>
        <p>- Please enjoy these abstract 3d forms and UIs. Want to see your product with this kind of styling? Contact me.</p>
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

</script>
  
<style scoped>

@media (max-width: 600px) {
  .right {
    display: none;
  }
}

.test {
  margin: 5%;
}

.text-container {
  padding: 40px 5%;
  overflow: auto;
  
}

.heading-text {
  margin-bottom: 2rem;
  font-size: 2rem;
}

.heading-text h4 {
  font-weight: 100;
}

.image-gallery {
  /* Mobile first */
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.image-gallery .column {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.image-item img {
  width: 100%;
  border-radius: 5px;
  height: 100%;
  object-fit: cover;
}

@media only screen and (min-width: 768px) {
  .image-gallery {
    flex-direction: row;
  }
}

.image-item {
  position: relative;
  cursor: pointer;
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(82, 255, 96, 0.502);
  top: 0;
  left: 0;
  transition: all 0.1s 0.1s ease-in-out;
  color: #fff;
  /* center overlay content */
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
}

.image-item:hover .overlay {
  opacity: 1;
}



</style>