<template>
  <div class="weather-box-container">
    <div class="weather-box">
      <div class="title-text" v-if="!weatherData">
        <h4>GPT INFUSED <img src="/logos/svg/gpt.svg" style="height: 16px;">WEATHER RETRIEVAL</h4>
      </div>
      <div class="weather-input-field" v-if="!weatherData">
        <UForm :state="state" :schema="WeatherSchema" @submit="fetchWeatherGptDescription">
          <div style="padding: 6px;">
              <UFormGroup name="city">
                  <UInput type="city" v-model="state.city" placeholder="ENTER A CITY" />
              </UFormGroup>
          </div>
          <button type="submit" class="go-button" block v-if="!isLoading">
              <span>GO</span>
            </button>
            <div v-if="isLoading" style="display: inline; height: 32px;">
              <img src="/deco/svg/animated/loadingSpinner.svg">
            </div>
        </UForm>
      </div>
      <h5 v-if="!weatherData && !errorMessage" style="font-style: italic;">ChatGPT is going to give you accurate weather in a southern accent.</h5>
      <div class="weather-result" v-if="weatherData">
        <h4>{{ weatherData }}</h4>
        <h5 style="font-style: italic; padding-bottom: 6px; padding-top: 6px;">Raw weather info provided by OpenWeather API</h5>
        <button class="go-button" @click="weatherData = null"><h4>GO AGAIN</h4></button>
      </div>
      <div class="weather-error" v-if="errorMessage">
        <h4>{{ errorMessage }}</h4>
      </div>
    </div>
    <div class="valid-entries-ex" v-if="errorMessage">
      <div>
        <h3 style="color: var(--error-primary)">some valid entries to try:</h3>
        <h4 style="color: var(--error-primary)">- atlanta</h4>
        <h4 style="color: var(--error-primary)">- london</h4>
        <h4 style="color: var(--error-primary)">- los angeles</h4>
      </div>
    </div>
  </div>
</template>
    
<script setup lang="ts">
import { ref } from 'vue';
import WeatherSchema from '~/schemas/Weather.schema';
import type { FormSubmitEvent } from '@nuxt/ui/dist/runtime/types';
import { z } from 'zod';
import { useFetch } from '@vueuse/core';


const state = reactive({
  city: '', // only a city for now
});
const weatherData = ref();
let isLoading = ref(false);
let errorMessage = ref<string>('');

async function fetchWeatherGptDescription(event: FormSubmitEvent<z.output<typeof WeatherSchema>>) {
  try {
    if (!state.city) {
      errorMessage.value = 'Please enter a city.';
      return;
    }
    isLoading.value = true;
    const {data, error} = await useFetch('/api/weathers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(state),
    }).text();
    weatherData.value = data.value;
    errorMessage.value = error ? errorMessage.value : '';
    isLoading.value = false;
  } catch (error) {
    console.log('wbox caught error: ', error);
  }
}
</script>
    
<style scoped>
.weather-deco {
  position: fixed;
  right: 0;
  top: 0;
  padding: 4px;
}

.weather-box {
  background: var(--background-primary);
  width: 60%;
  border: 4px solid var(--accent-primary);
  padding: 5%;
  margin: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-height: 80%;
  overflow-y: auto;
}

.weather-input-field {
  display: flex;
  justify-content: center;
  width: 100%;
  padding-bottom: 12px;
}

.weather-result {
  display: grid;
  max-width: 80%;
  padding: 16px;
  border: 2px solid var(--ui-primary);
}

.go-button {
  background-color: var(--accent-primary);
  height: 32px;
  font-family: bloop;
  cursor: pointer;
  border: 2px solid var(--ui-primary);
}

.weather-box-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.valid-entries-ex {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(0,0,0,0.8);
  border-top: 4px solid var(--ui-primary);
}

@media(max-width: 768px) {


  .weather-box {
    width: 85%;
  }
}
</style>
    