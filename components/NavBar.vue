<template>
    <div id="navbar">
        <div class="navbar-item">
            <NuxtLink to="/">
                <img src="../assets/navbar/home.svg" class="icon"/>
            </NuxtLink>
        </div>
        <div style="position: absolute; top: 9%;">
            <NuxtLink to="/"><p>home</p></NuxtLink>
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
    height: 10%;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 4px solid var(--ui-primary);
}

.navbar-item {
    display: inline-block;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1%;
}

.icon {
    filter: invert(1);
    width: 50px;
}


</style>