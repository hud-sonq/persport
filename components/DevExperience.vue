<template>
  <div class="main-title-container">
    <div class="main-title">
      <p>Projects / Experience</p>
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
        <div class="project-deco-container">
          <a :href="props.decoHrefs[index-1]" target="_blank"><img class="project-deco" :src="props.decos[index-1]"/></a>
        </div>
        <div class="project-title-texts">
          <span class="title">{{props.titles[index-1]}} </span>
          <h4 class="subtitle">{{props.subtitles[index-1]}}</h4>
        </div>
      </div>
      <div class="paragraph">
        <p class="paragraph"><span class="paragraph-start">{{props.paragraphStarts[index-1]}}</span>{{props.paragraphs[index-1]}}</p>
      </div>
      <div id="project-image">
        <img class="image" :src="props.images[index-1]" alt=""/>
      </div>
    </div>
    <div class="wanna-see-more">
      <h4>Wanna see more?</h4>
      <div class="wanna-see-more-clickable" @click="$emit('go-to-weather')">
        <img src="/clickables/horizontal-arrow.png" style="height: 24px;">
        <img src="/logos/svg/gpt.svg" style="height: 24px;">
        <h4 style="text-decoration: underline;">GPT infused weather</h4>
        <img src="/clickables/horizontal-arrow.png" style="height: 24px;">
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
p {
  margin: 2%;
  font-weight: bold;
}
p {
  font-weight: bold;
}
.title {
  font-weight: bold;
  font-size: 1.5rem;
}
.subtitle {
  font-style: italic;
  font-size: 1rem;
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

@media (max-width: 768px) {
  .title {
      font-size: 1.2rem;
    }
  .subtitle {
    font-size: .75rem;
  }
  p {
    font-size: .7rem;
  }
  .main-title-github-text {
    display: none;
  }
  .main-title-github-container {
    width: 20px;
    height: 20px;
    padding-top: 2%;
    padding-left: 2%;
    border-left: 2px solid var(--ui-primary);
    border-bottom: 2px solid var(--ui-primary);
  }
  .wanna-see-more {
    display: flex;
  }
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
}


.main-title-github-svg {
  object-fit: contain;
}

.project-deco-container {
  position: relative;
  left: 0;
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
  padding: 4%;
  margin: 3%;
  background-color: var(--accent-primary);
  border: 4px solid var(--ui-primary);
}

.all-projects-container {
  display: flex;
  flex-direction: column;
  height: 85%;
}

.project-deco {
  height: 38px;
  margin: 5%;
  padding-right: 6px;
}

.image {
  width: 100%; 
  height: 100%;
}
</style>