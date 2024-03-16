<template>
  <div id="navbar">
    <div class="navbar-item">
      <NuxtLink to="/dev" class="link">
        <img src="/deco/svg/dev_icon.svg" style="filter: invert(1)">
      </NuxtLink>
    </div>
    <div class="navbar-item">
      <NuxtLink to="/graphics" class="link">
        <img src="/deco/svg/3d_icon.svg" style="filter: invert(1)">
      </NuxtLink>
    </div>
    <div class="navbar-item">
      <NuxtLink to="/" class="link">
          <img src="/deco/svg/home.svg" style="filter: invert(1)">
      </NuxtLink>
    </div>
    <div class="navbar-item">
      <NuxtLink to="/resume" class="link">
        <img src="/deco/svg/guy_icon.svg" style="filter: invert(1)">
      </NuxtLink>
    </div>
    <div class="navbar-item">
      <NuxtLink to="/sound" class="link">
        <img src="/deco/svg/sound_icon.svg" style="filter: invert(1)">
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
 #navbar {
  position: fixed;
  translate: translate(-50%, -50%);
  right: -16px;
  height: 102%;
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: right 0.2s ease-in-out;
  z-index: 1;
}


.navbar-item {
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  border-bottom: 1px solid var(--ui-primary);
  border-left: 1px solid var(--ui-primary);
  padding: 4px;
  height: 44px;
  background-color: black;
}

#navbar .navbar-item:first-child {
  border-top: 1px solid var(--ui-primary);
}

.link {
  text-decoration: none; 
  display: flex; 
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 64px;
}


.navbar-item:hover {
  background-color: var(--accent-primary);
}

.invert {
  filter: invert(1);
}

#navbar:hover {
  right: 0;
}

</style>