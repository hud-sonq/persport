<template>
    <div class="deco deco-top-left" v-if="!motd">
        <div class="invert">
            <img style="cursor: pointer;" src="/deco/svg/bang.svg"  @click="enableMotd()">
        </div>
    </div>
    <div class="deco deco-bottom-right" v-if="!links">
        <div class="invert">
            <img style="cursor: pointer;" src="/deco/svg/mail1.svg"  @click="enableLinks()">
        </div>
    </div>
    <div class="welcome" id="welcome" ref="welcome" >
        <div id="welcomeText" ref="welcomeText" class="active">
            <h1 class="stackit-text">WELCOME</h1>
        </div>
        <div id="skillBox" ref="skillBox" class="active">
            <NuxtLink to="/dev" id="skill-bg" class="stackit-top-left">
                <div id="skill-itself">
                    <h4>DEVELOPMENT</h4>
                    <span> + PLAYGROUND </span>
                </div>
            </NuxtLink>
            <NuxtLink to="/graphics" id="skill-bg" class="stackit-top-right">
                <div id="skill-itself">
                    <h4>GRAPHICS AND 3D</h4>
                </div>
            </NuxtLink>
            <NuxtLink to="/sound" id="skill-bg" class="stackit-bottom-left">
                <div id="skill-itself">
                    <h4>SOUND DESIGN</h4>
                </div>
            </NuxtLink>
            <NuxtLink to="/resume" id="skill-bg" class="stackit">
                <div id="skill-itself">
                    <h4>RESUME</h4>
                </div>
            </NuxtLink>
        </div>
    </div>
    <div v-if="motd || links" class="motd">
        <div v-if="motd" style="background: var(--background-primary); border: 2px solid var(--ui-primary); height: 300px; width: 420px; z-index: 9999;">
            <img src="/deco/svg/uiline1.svg" style="position: absolute; left: 0; right: 0; top: 2%; height: 4%; filter: invert(1)">
            <img src="/deco/svg/uiline1.svg" style="position: absolute; right: 0; bottom: 2%; height: 4%; filter: invert(1); transform: rotate(180deg);">
            <div style="cursor: pointer; position: absolute; right: 0; top: 0; text-align: center; font-size: 16px; font-weight: bold; color: var(--ui-primary);" @click="enableMotd()">
                <div style="padding: 2px;">
                    <img src="/deco/svg/closebox.svg" style="height: 32px; width: 32px; filter: invert(1);">
                </div>            
            </div>
            <div style="display: flex; align-items: center; justify-content: center; height: 100%;">
                <div style="padding: 16px; text-align: center;">
                    <span>Hey there, I'm <span style="color: red;">Hudson</span>. The purpose of this website is to <span style="color: red;">demonstrate my abilities.</span> I am eager to provide <span style="color: var(--accent-primary);">creative innovation</span> for your website or business!</span>
                </div>
            </div>
        </div>
        <div v-if="links" style="background: var(--background-primary); border: 2px solid var(--ui-primary); height: 300px; width: 420px; z-index: 9999;">
            <img src="/deco/svg/uiline1.svg" style="position: absolute; left: 0; right: 0; top: 2%; height: 4%; filter: invert(1)">
            <img src="/deco/svg/uiline1.svg" style="position: absolute; right: 0; bottom: 2%; height: 4%; filter: invert(1); transform: rotate(180deg);">
            <div style="cursor: pointer; position: absolute; right: 0; top: 0; text-align: center; font-size: 16px; font-weight: bold; color: var(--ui-primary);" @click="enableLinks()">
                <div style="padding-top: 2px;">
                    <img src="/deco/svg/closebox.svg" style="height: 32px; width: 32px; filter: invert(1);">
                </div>            
            </div>
            <div style="display: flex; align-items: center; justify-content: center; height: 100%;">
                <div style="padding: 16px; text-align: center;">
                    <p>Send me a message:</p>
                    <ContactForm />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const motd = ref(false);
function enableMotd() {
    motd.value = !motd.value;
}
const links = ref(false);
function enableLinks() {
    links.value = !links.value;
}
</script>


<style scoped>

.motd {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 80%;
}

.invert {
    filter: invert(1);
    width: 64px;
}

.deco-top-left {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 10%;
    margin: 1%;
}

.deco-bottom-right {
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 1%;
}

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
    transition: border .6s ease-in-out, text-shadow .3s ease-in-out;
    max-width: 95%;
}

#welcomeText {
    position: relative;
    display: flex;
    flex-flow: column wrap;
    overflow: auto;
    justify-content: center;
    opacity: 0;
    max-width: 100%;
}

#big {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    opacity: 1;
    pointer-events: none;
    padding: 12px;
    max-width: 100%;
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
}

#skillBox {
    opacity: 0;
    transition: opacity .6s ease-in-out, top .6s ease-in-out;
    top: 50%;
    position: relative;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
    margin: 5%;
}

#skillBox.active {
    opacity: 1;
    pointer-events: all;
    top: 0%;
}


#skill-bg {
    border: 4px solid var(--ui-primary);
    transition: transform 180ms ease-out, background-color 300ms ease-in-out, box-shadow 300ms ease-in-out;
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

.resume-highlighter {
    border: 4px solid var(--ui-secondary);
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
