<template>
  <!-- <NavBar /> -->
  <NavBarRight />
  <div id="main" ref="main" class="">
    <NuxtPage/>
  </div>
</template>

<script lang="ts" setup>
</script>

<style>
.load-engaged {
  animation: pageOut 1s reverse;
  animation-iteration-count: 1;
}

#main {
  opacity: 1;
}

.page-leave-active {
  animation: pageOut .6s;
}

.page-enter-active {
  animation: pageOut .6s reverse;
}


@keyframes pageOut {
  0% {
    transform: scale(1);
    opacity: 1;
    rotate: 0deg;
  }
  50% {
    background-color: white;
    filter: brightness(500);
    transform: scale(.04);
    opacity: 1;
    rotate: 0deg;
  }
  55% {
    background-color: white;
    filter: brightness(500);
    transform: scale(.04);
    opacity: 1;
  }
  60% {
    background-color: white;
    filter: brightness(500);
    transform: scale(.04);
    opacity: 1;
  }
  65% {
    background-color: white;
    filter: brightness(500);
    transform: scale(.04);
    opacity: 0;
  }
  70% {
    background-color: white;
    filter: brightness(500);
    transform: scale(.04);
    opacity: 1;
  }
  75% {
    background-color: white;
    filter: brightness(500);
    transform: scale(.04);
    opacity: 0;
  }
  80% {
    background-color: white;
    filter: brightness(500);
    transform: scale(.04);
    opacity: 1;
    rotate: 180deg;
  }
  100% {
    transform: scale(.04);
    background-color: white;
    filter: brightness(500);
    opacity: 1;
    rotate: 180deg;
  }
}


#main.load-engaged {
  opacity: 0;
}

.loading-container {
  height: 100vh;
  width: 90vw;
  display: flex;
  margin: 3%;
  padding-bottom: 5%;
  justify-content: center;
  align-items: center;
  border: 4px solid white;
  opacity: 1;
}


body {
  background-color: var(--background-primary);
  overflow: hidden;
}
</style>