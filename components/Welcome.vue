<template>
    <div class="welcome" id="welcome" ref="welcome">
        <div id="welcomeText" ref="welcomeText">
            <div id="big" ref="big">
                <h1>WELCOME</h1>
            </div>
        </div>
        <div id="skillBox" ref="skillBox">
            <NuxtLink to="/dev" id="skill-bg">
                <div id="skill-itself">
                    <h4>DEVELOPMENT</h4>
                </div>
            </NuxtLink>
            <NuxtLink to="/graphics" id="skill-bg">
                <div id="skill-itself">
                    <h4>Graphics & 3D</h4>
                </div>
            </NuxtLink>
            <NuxtLink to="/photo-video" id="skill-bg">
                <div id="skill-itself">
                    <h4>Photo / Video</h4>
                </div>
            </NuxtLink>
            <NuxtLink to="/sound" id="skill-bg">
                <div id="skill-itself">
                    <h4>Sound Design</h4>
                </div>
            </NuxtLink>
        </div>
        <div id="resume" ref="resume">
            <NuxtLink to="/resume">
                <p>I just want to see a resume...</p>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
let welcomeText = ref<HTMLElement | null>(null);
let skillBox = ref<HTMLElement | null>(null);
let resume = ref<HTMLElement | null>(null);
let welcome = ref<HTMLElement | null>(null);

onMounted(() => {
    cooldownTimeout = setTimeout(() => {
        welcomeText.value?.classList.add('active');
    }, 600);
    cooldownTimeout = setTimeout(() => {
        skillBox.value?.classList.add('active');
    }, 1000);
    cooldownTimeout = setTimeout(() => {
        resume.value?.classList.add('active');
    }, 1800);
    cooldownTimeout = setTimeout(() => {
        welcome.value?.classList.add('active');
    }, 2000);
});


let cooldownTimeout = null;

</script>


<style scoped>

.link {
    text-decoration: none;
    height: inherit;
}


#welcome {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    transition: border .6s ease-in-out;
}


#welcome.active {
    border: 4px solid var(--ui-primary);
}

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
    opacity: 0;
    transition: opacity .6s ease-in-out, top .6s ease-in-out;
    top: 50%;
    position: relative;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
}

#skillBox.active {
    opacity: 1;
    pointer-events: all;
    top: 0%;
}


#skill-bg {
    border: 4px solid var(--ui-primary);
    transition: transform 180ms ease-out, background-color 300ms ease-in-out;
    transform-style: preserve-3d;
    cursor: pointer;
    margin: 2%;
    text-decoration: none;
    padding: 16px;
}

#skill-itself {
    transition: transform 180ms ease-out;
    transform-style: preserve-3d;
    cursor: pointer;
    text-align: center;
}

#skill-bg:hover {
    background-color: var(--accent-primary);
}

#skillBox > *:nth-child(1):hover {
    transform: perspective(900px) rotateY(24deg) rotatex(-12deg);
}
#skillBox > *:nth-child(2):hover {
    transform: perspective(900px) rotateY(-24deg) rotatex(-12deg);
}
#skillBox > *:nth-child(3):hover {
    transform: perspective(900px) rotateY(24deg) rotatex(12deg);
}
#skillBox > *:nth-child(4):hover {
    transform: perspective(900px) rotateY(-24deg) rotatex(12deg);
}

#resume {
    opacity: 0;
}

#resume.active {
    opacity: 1;
    transition: opacity 1.8s ease-in-out
}

</style>
