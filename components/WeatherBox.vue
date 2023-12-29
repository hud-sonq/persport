<template>
  <div class="weather-box stackit">
    <div class="centered-child">
      <div v-if="!weatherData" class="weather-input">
        <h4>WEATHER RETRIEVAL</h4>
        <div style="max-width: 100%; overflow: hidden;">
          <form @submit.prevent="getWeather" style="display: flex; flex-direction: column; align-items: center; justify-content: center;">
            <input v-model="city" @input="searchCity" placeholder="ENTER A CITY" style="min-width: 100%;"/>
            <button @click="getWeather" style="background-color: var(--accent-secondary); margin-top: 8px; padding: 10%; width: 100%; cursor: pointer;"><h3>Go</h3></button>
            <p v-if="responseError" style="color: red;">{{ responseError }}!</p>
          </form>
        </div>
      </div>
    </div>
    <div v-if="weatherData" class="centered-child">
      <div class="weather-result">
        <p>The temperature in {{ weatherData.name }} is {{ (weatherData.main.temp *1.8 ) + 32 }}°F. It's {{ weatherData.weather[0].description }}. {{ funnyMessage }} </p>
        <!-- <p>{{ funnyBotResponse }}</p> -->
        <form @submit.prevent="retry">
          <button @click="retry" style="background-color: var(--accent-secondary); margin-top: 8px; padding: 10%; width: 100%; cursor: pointer;">
            <h3>Go Again</h3>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
    
<script setup>
const config = useRuntimeConfig();
import { ref } from 'vue';
import axios from 'axios';
import OpenAI from "openai";

const apiKey = config.owSecret;
const secretApiKey = config.public.secret;
const city = ref('');
const weatherData = ref(null);
const responseError = ref(null);

const getWeather = () => {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&appid=${apiKey}`;
  axios
    .get(apiUrl)
    .then((response) => {
      weatherData.value = response.data;
    })
    .catch((error) => {
      console.error('Error fetching weather data:', error);
      responseError.value = error.response.data.message;
    });
};

// const funnyBot = new OpenAI({
//   apiKey: secretApiKey,
//   dangerouslyAllowBrowser: true
// });

// const funnyBotResponse = await funnyBot.chat.completions.create({
//   model: "gpt-3.5-turbo",
//   messages: [
//     {
//       "role": "system",
//       "content": "Explain this weather status, but in a funny and interesting way."
//     },
//     {
//       "role": "user",
//       "content": "heavy hail",
//     }
//   ],
//   temperature: 0,
//   max_tokens: 1024,
//   top_p: 1,
//   frequency_penalty: 0,
//   presence_penalty: 0,
// });

const funnyMessages = ref([
  'Keep your socks tied.',
  'If you eat some poop, you will die.',
  'The is also a chance of nuclear war.',
  'Craziest weather this town has ever had.',
  'Don\'t forget to bring toothpaste.',
  'Do not forget to eat fruit.',
]);
const funnyMessage = ref('');
const getRandomMessage = () => {
  const index = Math.floor(Math.random() * funnyMessages.value.length);
  funnyMessage.value = funnyMessages.value[index];
};
getRandomMessage();

function retry() {
  weatherData.value = null;
  responseError.value = null;
  city.value = '';
}


</script>
    
<style scoped>

.weather-box {
  border: 4px solid var(--ui-primary);
  padding: 5%;
  width: 90%;
}

.weather-input {
  display: grid;
  width: 100%;
}

.weather-result {
  display: grid;
  max-width: 80%;
}

.centered-child {
  display: flex; 
  justify-content: center; 
  align-items: center;
}

</style>
    