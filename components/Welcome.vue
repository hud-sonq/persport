<template>
    <div id="welcomeText" ref="welcomeText">
        <div id="big" ref="big">
            <h1>WELCOME </h1>
        </div>
        <div id="med" ref="med">
            <h3>I'm Hudson, a multimedia artist from Tennessee</h3>
        </div>
    </div>
    <div id="skillBox" ref="skillBox">
        <div id="skill-bg">
            <div id="skill-itself">
                <h4>UX/UI & Development</h4>
            </div>
        </div>
        <div id="skill-bg">
            <div id="skill-itself">
                <h4>Graphics & 3D</h4>
            </div>
        </div>
        <div id="skill-bg">
            <div id="skill-itself">
                <h4>Photo / Video</h4>
            </div>
        </div>
        <div id="skill-bg">
            <div id="skill-itself">
                <h4>Sound Design</h4>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
const welcomeText = ref<HTMLElement | null>(null);

onMounted(() => {
    cooldownTimeout = setTimeout(() => {
        welcomeText.value?.classList.add('active');
    }, 600);
});


let cooldownTimeout = null;

</script>


<style>

#welcomeText {
    position: relative;
    display: flex;
    flex-flow: column wrap;
    overflow: auto;
    justify-content: center;
    opacity: 0;
    top: 50%;
    transition: opacity .6s ease-in-out, top .6s ease-in-out;
}

#big {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    opacity: 1;
    pointer-events: none;
}


#med {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    opacity: 1;
    pointer-events: none;
}

#welcomeText.active {
    opacity: 1;
    pointer-events: all;
    top: 0%;
}

#skillBox {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    margin: 5%;
    flex: 1;
    justify-content: center;
}

#skill-bg {
    flex: 1;
    background: red;
    border: 1px solid var(--ui-primary);
    display: flex; 
    flex-basis: calc(50% - 20%);  
    justify-content: center;
    flex-direction: column;
    transition: transform 180ms ease-out;
    transform-style: preserve-3d;
    cursor: pointer;
    margin: 10px;
    text-align: center;
}

#skill-itself {
    flex: 1;
    border: 1px solid var(--ui-primary);
    display: flex; 
    flex-basis: calc(50% - 20%);  
    justify-content: center;
    flex-direction: column;
    transition: transform 180ms ease-out;
    transform-style: preserve-3d;
    cursor: pointer;
    text-align: center;
}




</style>
