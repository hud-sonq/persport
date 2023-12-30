<template>
  <div class="weather-box stackit">
    <div class="centered-child">
      <div v-if="!weatherData" class="weather-input">
        <h4>WEATHER RETRIEVAL</h4>
        <UForm :state="state" :schema="WeatherSchema" @submit="fetchWeatherGptDescription">
          <div style="padding-bottom: 6px; padding-top: 6px;">
              <UFormGroup name="name">
                  <UInput type="name" v-model="state.city" placeholder="ENTER A CITY" />
              </UFormGroup>
          </div>
          <button type="submit" style="background-color: var(--accent-quaternary); height: 32px; font-family: bloop; color: var(--text-secondary); cursor: pointer;" block>
              <span>GO</span>
          </button>
        </UForm>
      </div>
      <div v-if="isLoading" style="display: inline; padding-left: 12px;">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><rect width="10" height="10" x="1" y="1" fill="currentColor" rx="1"><animate id="svgSpinnersBlocksShuffle20" fill="freeze" attributeName="x" begin="0;svgSpinnersBlocksShuffle27.end" dur="0.2s" values="1;13"></animate><animate id="svgSpinnersBlocksShuffle21" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle24.end" dur="0.2s" values="1;13"></animate><animate id="svgSpinnersBlocksShuffle22" fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle25.end" dur="0.2s" values="13;1"></animate><animate id="svgSpinnersBlocksShuffle23" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle26.end" dur="0.2s" values="13;1"></animate></rect><rect width="10" height="10" x="1" y="13" fill="currentColor" rx="1"><animate id="svgSpinnersBlocksShuffle24" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle20.end" dur="0.2s" values="13;1"></animate><animate id="svgSpinnersBlocksShuffle25" fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle21.end" dur="0.2s" values="1;13"></animate><animate id="svgSpinnersBlocksShuffle26" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle22.end" dur="0.2s" values="1;13"></animate><animate id="svgSpinnersBlocksShuffle27" fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle23.end" dur="0.2s" values="13;1"></animate></rect></svg>
      </div>
    </div>
    <div v-if="weatherData" class="centered-child">
      <h4>{{ weatherData }}</h4>
    </div>
  </div>
</template>
    
<script setup lang="ts">
import { ref } from 'vue';
import WeatherSchema from '~/schemas/Weather.schema';
import type { FormSubmitEvent } from '@nuxt/ui/dist/runtime/types';
import { z } from 'zod';


const state = reactive({
  city: '',
});
const weatherData = ref('');
let isLoading = ref(false);
let message = ref<string>('');

async function fetchWeatherGptDescription(event: FormSubmitEvent<z.output<typeof WeatherSchema>>) {
  try {
      isLoading.value = true;
      console.log(isLoading);
      fetch('/api/weathers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(state),
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        weatherData.value = data;
      })
    } catch (error) {
        console.error('errr ', error);
    } finally {
        isLoading.value = false;
    }
}
const responseError = ref(null);
</script>
    
<style scoped>

.weather-box {
  border: 4px solid var(--ui-primary);
  padding: 5%;
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
    