<template>
    <div>
      <div class="split-container active">
        <div class="left">
          <LeftTerminal/>
        </div>
        <div class="right">
          <div class="resume-container">
            <h1> Resume </h1>
            <div class="title"></div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  </script>
  
  
  <style scoped>
  @media (max-width: 768px) {
    .left {
      display: none;
    }
  }
  .resume-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5%;
  }
  
  </style>