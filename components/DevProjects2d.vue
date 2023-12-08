<template>
  <div style="text-align: center; border-bottom: 4px solid var(--ui-primary);">
    <p>Project Of Focus</p>
  </div>
  <div class="top-bar-div stackit" style="width: 32px; height: 32px; min-width: 32px; min-height: 32px; margin: 0;">
    <a href="https://github.com/hud-sonq" target="_blank">
      <img src="../logos/gh_white.svg" class="gh-svg">
    </a>
  </div>
  <div class="all-projects-container">
    <div class="project">
      <div class="acnt-title">
        <div>
          <h2>Accountonomics</h2>
          <h4>Frontend Engineer</h4>
        </div>
        <div class="acnt-gif">
          <a href="https://accountonomics.com" target="_blank">
            <img src="../acnt/loading.gif" style="height: 100%; padding-left: 12px;">
          </a>
        </div>
      </div>
      <div class="acnt-description">
        <p style="margin: 2%;">- Accountonomics is a team-based educational webgame that puts students in charge of a business, and their decisions drive results in a simulated competitive market. They are responsible for accounting for their actions.</p>
        <p style="margin: 2%;">- Most of the project's code was developed in 2020; in early 2023, I began to assist with devlopment by adding a glossary center, a dark mode, a working journal entry component, and several general ui/ux improvements.</p>
        <p style="margin: 2%; border-bottom: 1px solid var(--ui-primary); padding-bottom: 12px;">- Our team hopes to release this game to the public by Q4 2024.</p>
      </div>
      <div class="acnt-pic">
        <img src="../acnt/synopsis.png" style="width: 100%; padding-left: 12px;">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style>

.acnt-title {
  height: 10%;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid var(--ui-primary);
  padding-bottom: 12px;
}

.acnt-pic {
  max-height: 2px; 
}

.acnt-gif {
  height: 100%;
  width: 100%;
  max-width: 100%;
  max-height: 100%;
  justify-self: flex-end;
}
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.top-bar-div {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
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
}

.project {
  padding: 4%;
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


.all-projects-container {
  display: flex;
  flex-direction: column;
  height: 85%;
}

.project {
  margin: 3%;
}

</style>