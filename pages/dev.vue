<template>
  <div>
    <div class="split-container active">
      <div class="left stackit" style="display: flex; flex-direction: column;">
        <DevProjects2d />
      </div>
      <div class="right stackit">
        <div v-if="!signedIn" class="sign-in-required">
            <div class="sign-in-card stackit">
              <NuxtLink to="/auth/account" style="text-decoration: none;">
                <div>
                  <img src="/deco/svg/emptybody.svg" style="filter: invert(1)">
                  <span style="margin-left: 12px;">Sign in / Sign up</span>
                </div>
              </NuxtLink>
            </div>
        </div>
        <div v-if="signedIn">
          <div class="top-bar">
            <div class="top-bar-div" style="min-width: 30%; overflow: hidden;">
              <div class="active-app-div">
                <h4 style="font-size: 1em;">Interact:</h4>
                <h2 style="color: var(--accent-secondary); font-size: 2.5em;">{{activeApp}}</h2>
              </div>
            </div> 
            <div class="top-bar-div" style="min-width: 70%;">
              <p style="font-size: 1em;">{{ activeAppDescriptionArray[activeAppDescriptionIndex] }}</p>
            </div> 
          </div>
          <div class="content">
            <div class="move-left-button">
              <img @click="moveAppLeft()" src="../clickables/horizontal-arrow.png" class="move-left-png">
            </div>
            <WeatherBox v-if="activeApp === 'Weather'" ref="Weather"/>
            <div class="move-right-button">
              <img @click="moveAppRight()" src="../clickables/horizontal-arrow.png" class="move-right-png">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

let signedIn = ref<boolean>(true);
let route = useRoute();
let router = useRouter();

let currentIndex = 0;
const totalItems = 4;
let activeApp = ref<string>('Weather');
let activeAppIndex = ref<number>(0);
let apps = ref<string[]>(['Weather', 'To-do', 'DSP']);
let activeAppDescription = ref<string>('');
let activeAppDescriptionIndex = ref<number>(0);
let activeAppDescriptionArray = ref<string[]>(['- Type in a city to get its current weather conditions. Watch out: ChatGPT likes to make odd comments about the weather.', 'Interact with this 3D model I made.', 'Check out these audio-reactive cubes.']);


function moveAppLeft() {
  currentIndex = (currentIndex + 1) % totalItems;
  activeApp.value = apps.value[currentIndex];
  activeAppDescriptionIndex.value = currentIndex;
  console.log('goleft: ', currentIndex, 'app:', apps.value[currentIndex]);
}
function moveAppRight() {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  activeApp.value = apps.value[currentIndex];
  activeAppDescriptionIndex.value = currentIndex;
  console.log('goright: ', currentIndex, 'app:', apps.value[currentIndex])
}
</script>
  
  
<style scoped>
@media (max-width: 600px) {
  span {
    font-size: 1em;
  }
  h1 {
    font-size: 20px;
  }
  h2 {
    font-size: 15px;
  }
  h3 {
    font-size: 13px;
  }
  h4 {
    font-size: 12px;
  }
  p {
    font-size: 12px;
  }
}

.sign-in-required {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 30%;
  text-align: center;
}


.sign-in-card {
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: var(--accent-primary);
  border-radius: 4px;
  padding: 4%;
  cursor: pointer;
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.top-bar {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  height: 25%;
  overflow: hidden;
}

.top-bar-div {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-right: 4px solid var(--ui-primary);
  border-bottom: 4px solid var(--ui-primary);
  max-height: 100%;
}

.top-bar-div-content {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.gh-svg {
  height: 100%;
  max-height: 100%;
  width: 100%;
}

.active-app-div {
  display: flex;
  flex-direction: column;
}

.top-left-cherry {
  width: 15%; 
  border-right: 4px solid var(--ui-primary);
  border-bottom: 4px solid var(--ui-primary);
}

.all-projects-container {
  display: flex;
  flex-direction: column;
  height: 85%;
}

.project {
  margin: 3%;
}

.move-left-button {
  position: absolute;
  left: 0;
  border-top: 4px solid var(--ui-primary);
  border-right: 4px solid var(--ui-primary);
  border-bottom: 4px solid var(--ui-primary);
  right: 90%;
}

.move-right-button {
  position: absolute;
  right: 0;
  left: 90%;
  border-top: 4px solid var(--ui-primary);
  border-left: 4px solid var(--ui-primary);
  border-bottom: 4px solid var(--ui-primary);
}

.move-left-png {
  transform: rotate(180deg);
  max-width: 100%;
  cursor: pointer;
}

.move-right-png {
  max-width: 100%;
  cursor: pointer;
}

.top-bar-arrows {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-left: 5%;
}
</style>