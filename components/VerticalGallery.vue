<template>
  <div class="image-gallery">
    <div class="column" v-for="columnStrip in [leftImages, rightImages]">
      <div v-for="image in columnStrip" class="image-item">
        <img :src="image.src" alt=""/>
        <div class="overlay"><h4>{{image.title}}</h4></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps  <{
  leftImages: string[];
  leftImagesTitles: string[];
  rightImages: string[];
  rightImagesTitles: string[];

  // images: {
  //   src: string;
  //   title: string;
  // }[]
}>()
const leftImages = props.leftImages.map((image, index) => ({
  src: image,
  title: props.leftImagesTitles[index]
}));
const rightImages = props.rightImages.map((image, index) => ({
  src: image,
  title: props.rightImagesTitles[index]
}));

const emits = defineEmits(['click']);


</script>

<style scoped>
.container {
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