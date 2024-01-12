<template>
  <div style="display: flex; justify-content: center;" class="mobile-v">
      <div id="navbar" class="">
          <div class="navbar-item">
              <NuxtLink to="/" class="link">
                  <img src="/deco/svg/home.svg" style="height: 80%; filter: invert(1)">
              </NuxtLink>
          </div>
          <div class="navbar-item">
              <NuxtLink to="/dev" class="link">
                <img src="/deco/svg/dev_icon.svg" style="height: 80%; filter: invert(1)">
              </NuxtLink>
          </div>
          <div class="navbar-item">
              <NuxtLink to="/graphics" class="link">
                <img src="/deco/svg/3d_icon.svg" style="height: 80%; filter: invert(1)">
              </NuxtLink>
          </div>
          <div class="navbar-item">
              <NuxtLink to="/resume" class="link">
                <img src="/deco/svg/guy_icon.svg" style="height: 80%; filter: invert(1)">
              </NuxtLink>
          </div>
          <div class="navbar-item">
              <NuxtLink to="/sound" class="link">
                <img src="/deco/svg/sound_icon.svg" style="height: 80%; filter: invert(1)">
              </NuxtLink>
          </div>
      </div>
  </div>
</template>

<script lang="ts" setup>

const fullbarExpanded = () => {
  const fullbar = true
  return !fullbar
}
</script>

<style scoped>
.mobile-v {
  display: block;
}

@media (max-width: 768px) {
  .mobile-v {
    display: none;
  }
}


#navbar {
  position: fixed;
  background-color: var(--accent-primary);
  top: 0;
  height: 3%;
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid var(--ui-primary);
  border-left: 2px solid var(--ui-primary);
  border-right: 2px solid var(--ui-primary);
  padding: 3px;
  transition: height 0.2s ease-in-out, width 0.2s linear; 
  z-index: 1;
}


.navbar-item {
  transform: scale(1);
  display: flex;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5%;
  max-width: 10%;
  border: 1px solid var(--accent-primary);
  transition: border 0.2s ease-in-out, transform 0.2s ease-in-out;
}

.link {
  padding: 12px;
  text-decoration: none; 
  height: 100%; 
  display: flex; 
  align-items: center;
}

#navbar:hover {
  height: 6%;
  width: 60%;
}

#navbar:hover .navbar-item {
  border: 1px solid #ffffff;
}

.navbar-item:hover {
  transform: scale(1.25);
  background-color: var(--accent-secondary);
}

.icon {
  width: 64px;
  transform: scale(0.5);
}

.invert {
  filter: invert(1);
}

.deco {
  width: 64px;
  height: 64px;
}


</style>