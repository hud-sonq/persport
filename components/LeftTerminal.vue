<template>
    <div id="terminal">
        <NavBar />
        <div>
            <FishView />
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

#terminal {
    width: 100%;
    flex: 1;
    border: 4px solid white;
    overflow: auto;
}

.navbar-div {
    height: 10%;
    border-bottom: 4px solid white;
}

</style>