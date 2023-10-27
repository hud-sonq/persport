<template>
    <div style="display: flex; justify-content: center;">
        <div id="navbar">
            <div class="navbar-item">
                <NuxtLink to="/" style="text-decoration: none;">
                    <h5>home</h5>
                </NuxtLink>
            </div>
            <div class="navbar-item">
                <NuxtLink to="/dev" style="text-decoration: none;">
                    <h5>dev</h5>
                </NuxtLink>
            </div>
            <div class="navbar-item">
                <NuxtLink to="/graphics" style="text-decoration: none;">
                    <h5>graphics</h5>
                </NuxtLink>
            </div>
            <div class="navbar-item">
                <NuxtLink to="/photo-video" style="text-decoration: none;">
                    <h5>photo-video</h5>
                </NuxtLink>
            </div>
            <div class="navbar-item">
                <NuxtLink to="/sound" style="text-decoration: none;">
                    <h5>sound</h5>
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

#navbar {
    position: fixed;
    background-color: rgb(30, 138, 41);
    top: 0;
    height: 1%;
    width: 45%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 4px solid var(--ui-primary);
    border-left: 4px solid var(--ui-primary);
    border-right: 4px solid var(--ui-primary);
}

.navbar-item {
    display: flex;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 32px;
    border: 1px solid white;
}

.icon {
    width: 64px;
    transform: scale(0.5);
}


</style>