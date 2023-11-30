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

const apiKey = config.public.ow;
const city = ref('');
const weatherData = ref(null);
const responseError = ref(null);

const getWeather = () => {
  console.log(apiKey);
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

  // TODO a more universal function including validation logic
  //
  // const tryWeather = async() => {
  //   if (!this.cityInput) {
  //     this.error = 'Please enter a city name';
  //     return;
  //   }
  //   if (!/^[a-zA-Z\s]+$/.test(this.cityInput)) {
  //     this.error = 'City name can only contain letters and spaces';
  //     return;
  //   }
  //   if (this.cityInput.length > 50) {
  //     this.error = 'City name is too long';
  //     return;
  //   }
  //   try {
  //     const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
  //       params: {
  //         q: this.cityInput,
  //         appid: 'e06dc55f9b9b31d73cf02d23310554d2',
  //       },
  //     });
  //     this.weatherData = response.data;
  //   } catch (error) {
  //     this.error = 'Invalid city name';
  //   }
  // };

</script>
    
<style scoped>

.weather-box {
  border: 4px solid var(--ui-primary);
  padding: 5%;
  max-width: 55%;
}

.weather-input {
  display: grid;
}

.weather-result {
  display: grid;
}

.centered-child {
  display: flex; 
  justify-content: center; 
  align-items: center;
}

</style>
    