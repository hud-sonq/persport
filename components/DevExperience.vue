<template>
  <div class="main-title-container">
    <div class="main-title">
      <span>Projects / Experience</span>
    </div>
    <div class="main-title-github-container">
      <div class="main-title-github-svg">
        <a href="https://github.com/hud-sonq" target="_blank">
          <img src="/logos/svg/gh_white.svg" class="gh-svg">
        </a>
      </div>
      <div class="main-title-github-text">
        <h5>see me on github</h5>
        <h5 style="color: var(--accent-primary)">@hud-sonq</h5>
      </div>
    </div>
  </div>
  <div class="all-projects-container">
    <div v-for="index in galleryLength" class="project" :key="index">
      <div class="project-title-area">
        <div class="project-title-texts">
          <div><h3 style="color: black;">{{props.titles[index-1]}} </h3></div>
          <div><h4 style="color: black;">{{props.subtitles[index-1]}}</h4></div>
        </div>
      </div>
      <div class="paragraph">
        <p style="color: black">{{props.paragraphs[index-1]}}</p>
      </div>
      <div id="project-image">
        <img class="image" :src="props.images[index-1]" alt=""/>
      </div>
    </div>
    <div class="wanna-see-more">
      <h4>Wanna see more?</h4>
      <div class="wanna-see-more-clickable" @click="$emit('go-to-weather')">
        <img src="/deco/png/horizontal_arrow.png" style="height: 24px;">
        <img src="/logos/svg/gpt.svg" style="height: 24px;">
        <h4 style="text-decoration: underline;">GPT infused weather</h4>
        <img src="/deco/png/horizontal_arrow.png" style="height: 24px;">
        <img src="/deco/svg/cloud.svg" style="height: 24px; filter: invert(1)">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps  <{
  titles: string[];
  subtitles: string[];
  paragraphStarts: string[];
  paragraphs: string[];
  images: string[];
  decos: string[];
  decoHrefs: string[];
}>()

const galleryLength = props.titles.length;

const emits = defineEmits(['go-to-weather']); // this emit is a mobile only feature
</script>

<style scoped>

.project-title-texts {
  position: relative;
  width: 100%;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 4px;
  background-color: white;
  box-shadow: -4px 4px var(--accent-primary);
}

p {
  margin: 2%;
  font-weight: bold;
  font-family: vinston;
}
.title {
  font-weight: bold;
  font-size: 1.5rem;
  text-align: left;
}
.subtitle {
  font-style: italic;
  font-size: 1rem;
  text-align: center;
}

.main-title-github-text {
  display: block;
}
.main-title-github-container {
  width: 20%;
  height: 5%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px;
  position: fixed;
  right: 0;
}

.gh-svg {
  height: 24px;
  padding-right: 4px; 
}

.wanna-see-more {
  display: none;
  flex-direction: column;
  justify-content: center;
  padding: 5%;
  text-align: center;
}

.wanna-see-more-clickable {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5%;
  border: 4px solid var(--ui-primary);

}

.main-title-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 40%;
  padding-bottom: 4%;
}

.main-title {
  text-align: center;
  border-left: 2px solid var(--ui-primary);
  border-bottom: 2px solid var(--ui-primary);
  border-right: 2px solid var(--ui-primary);
  padding: 8px;
}


.main-title-github-svg {
  object-fit: contain;
}

.project-deco-container {
  position: relative;
  left: 0;
  border: 1px solid var(--ui-primary);
  border-radius: 5px;
  margin-right: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.project-deco {
  height: 32px;
  width: 32px;
  padding: 2px;
}

.paragraph {
  background-color: white;
  padding-left: 0px;
  color: black;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  box-shadow: 4px 4px  var(--accent-primary);
  margin-bottom: 16px;
  margin-top: 16px;
}
.paragraph-start {
  color: red;
  font-weight: bold;
  font-size: 1.5rem;
}

.github {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

.project-title-area {
  display: flex;
  flex-direction: row;
}
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.all-projects-container {
  display: flex;
  flex-direction: column;
}

.project {
  padding: 6%;
  border-bottom: 2px solid var(--ui-primary);
  width: 75%;
  margin-bottom: 24px;
}

.all-projects-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 85%;
  gap: 32px;
}
.image {
  width: 100%; 
  height: 100%;
  border: 4px solid white;
  box-shadow: -4px 4px  var(--accent-primary);
  margin-left: -4px;
}
@media (max-width: 768px) {
  .main-title-github-container {
    display: none;
  }
  .wanna-see-more {
    display: flex;
  }
  .project {
    width: 69%;
  }
}
</style>