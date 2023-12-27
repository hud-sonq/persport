<template>
  <div style="text-align: center; border-bottom: 4px solid var(--ui-primary); padding: 12px;">
    <p>Projects / Experience</p>
  </div>
  <div class="github">
    <div class="top-bar-div" style="width: 32px; height: 32px; min-width: 32px; min-height: 32px; margin: 0;">
      <a href="https://github.com/hud-sonq" target="_blank">
        <img src="/logos/svg/gh_white.svg" class="gh-svg">
      </a>
    </div>
    <div>
      <h5 style="position: relative; top: 12px; left: 12px;">see me on github</h5>
      <h5 style="position: relative; top: 16px; left: 12px; color: var(--accent-primary)">@hud-sonq</h5>
    </div>
  </div>
  <div class="all-projects-container">
    <div class="project">
      <div class="project-title-area">
        <div class="project-title-texts">
          <h2>Accountonomics</h2>
          <h4>Frontend Developer</h4>
        </div>
        <div class="project-deco">
          <div class="acnt-deco">
            <a href="https://accountonomics.com" target="_blank">
              <img src="/deco/png/acnt_loading.gif" class="acnt-img">
            </a>
          </div>
        </div>
      </div>
      <div class="project-description">
        <p style="margin: 2%;"> <span style="color: red;">My current project of focus.</span> Accountonomics is a team-based educational webgame that puts students in charge of a business, and their decisions drive results in a simulated competitive market. They are responsible for accounting for their actions.</p>
        <p style="margin: 2%;">Most of the project's code was developed in 2020; in early 2023, I began to assist with devlopment by adding a glossary center, a dark mode, a working journal entry component, and several general ui/ux improvements.</p>
        <p style="margin: 2%; border-bottom: 4px solid var(--ui-primary); padding-bottom: 12px;">Our team hopes to release this game to the public by Q4 2024.</p>
      </div>
      <div class="project-image">
        <img src="/deco/png/acnt_synopsis.png" style="width: 100%; height: 100%;">
      </div>
    </div>
    <div class="project">
      <div class="project-title-area">
        <div class="project-title-texts">
          <h2>Dino's Ocean Cleanup</h2>
          <h4>Sound design, map design</h4>
        </div>
        <div class="project-deco">
          <div style="position: fixed; height: 64px; right: 7%;">
            <a href="https://devpost.com/software/dino-s-ocean-cleanup" target="_blank" style="height: 100%; width: 100%;">
              <img src="/deco/png/dino.png" class="acnt-img">
            </a>
          </div>
        </div>
      </div>
      <div class="project-description">
        <p style="margin: 2%;">Dino's Ocean Cleanup is a 2d platformer game that me and a friend made at a hackathon.</p>
        <p style="margin: 2%;">I was responsible for the music, sfx, map design, animations, and implementations.</p>
      </div>
      <div class="project-image">
        <img src="/deco/gif/doc_gameplay.gif" style="width: 100%; height: 100%;">
      </div>
    </div>
    <div class="project">
      <div class="project-title-area">
        <div class="project-title-texts">
          <h2>Skybox</h2>
          <h4>A project from university</h4>
        </div>
        <div class="project-deco">
          <div style="position: fixed; height: 64px; right: 7%;">
            <a href="https://github.com/hud-sonq/skybox" target="_blank">
              <img src="/logos/svg/gh_white.svg" style="height: 50%; padding-left: 12px;">
            </a>
          </div>
        </div>
      </div>
      <div class="project-description">
        <p style="margin: 2%;">Made with processing. Just a few cubes that react to audio tracks.</p>
      </div>
      <div class="project-image">
        <img src="/deco/png/skybox.png" style="width: 100%; height: 100%;">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

.acnt-img {
  height: 100%;
  width: 100%;
}

.acnt-deco {
  position: fixed; 
  height: 7%; 
  right: 7%;
}

.github {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

.project-title-area {
  display: flex;
  flex-direction: row;
  padding-bottom: 12px;
}


.project-deco {
  height: 100%;
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
  background-color: var(--accent-primary);
  border: 4px solid var(--ui-primary);
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