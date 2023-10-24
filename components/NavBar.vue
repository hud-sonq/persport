<template>
    <div class="navbar-full" id="navbar-full">
        <div class="navbar-div" id="navbar-div">
            <img src="../assets/navbar/home.svg" id="icon" />
        </div>
        <div class="navbar-div" id="navbar-div">
            <img src="../assets/navbar/graphics.svg" width="64" height="64" id="icon" />
        </div>
        <div class="navbar-div" id="navbar-div">
            <img src="../assets/navbar/sounds.svg" width="64" height="64" id="icon" />
        </div>
        <div class="navbar-div" id="navbar-div">
            <img src="../assets/navbar/dev.svg" width="64" height="64" id="icon" />
        </div>
        <div class="navbar-div" id="navbar-div">
            <img src="../assets/navbar/photo.svg" width="64" height="64" id="icon" />
        </div>
        <div class="navbar-div no-border" id="navbar-div">
            <img src="../assets/navbar/graphics.svg" width="64" height="64" id="icon" />
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

#icon {
    transition: transform 0.15s ease-out;
    filter: invert(1);
    width: 100%;
    height: 100%;
}

#navbar-full {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    bottom: 0;
    width: 100%;
    height: 10vh;
    background-color: var(--background-primary);
    overflow: hidden;
}

#navbar-div {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: var(--background-primary);
    cursor: pointer;
}

#navbar-div:hover #icon {
    transform: scale(0.8);
}

</style>