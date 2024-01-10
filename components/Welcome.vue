<template>
    <div class="deco deco-top-left" v-if="!showMessage">
        <div class="invert">
            <img :class="{ 'deco-blink': !leftMessageSeen, 'greyed-out': leftMessageSeen }" style="cursor: pointer;" src="/deco/svg/bang.svg"  @click="enableMessage()">
        </div>
    </div>
    <div class="deco-top-right">
        <img style="height: 100%; width: 100%; object-fit: contain; filter: invert(1)" src="/deco/svg/uiline1.svg">
    </div>
    <div class="deco-bottom-left">
        <img style="height: 100%; width: 100%; object-fit: contain; filter: invert(1)" src="/deco/svg/uiline1.svg">
    </div>
    <div class="deco deco-bottom-right" v-if="!showForm">
        <div class="invert">
            <img :class="{ 'deco-blink': !rightFormSeen, 'greyed-out': rightFormSeen }" style="cursor: pointer;" src="/deco/svg/mail1.svg"  @click="enableForm()">
        </div>
    </div>
    <div class="welcome" id="welcome" ref="welcome" >
        <div id="welcomeText" ref="welcomeText" class="active">
            <h1 class="stackit-text welcome-h1">WELCOME</h1>
        </div>
        <div id="skillBox" ref="skillBox" class="active">
            <NuxtLink to="/dev" id="skill-bg" class="stackit-top-left">
                <div id="skill-itself">
                    <span>DEVELOPMENT</span>
                    <div style="display: flex; flex-direction: column; justify-content: center; height: 32px;">
                        <span class="weather-icon-addition" style="position: absolute; left: 35%;"> + </span>
                        <img class="weather-icon-itself" src="/deco/svg/cloud.svg" style="filter: invert(1); height: 100%;">
                    </div>
                </div>
            </NuxtLink>
            <NuxtLink to="/graphics" id="skill-bg" class="stackit-top-right">
                <div id="skill-itself">
                    <span>GRAPHICS AND 3D</span>
                </div>
            </NuxtLink>
            <NuxtLink to="/sound" id="skill-bg" class="stackit-bottom-left">
                <div id="skill-itself">
                    <span>SOUND DESIGN</span>
                </div>
            </NuxtLink>
            <NuxtLink to="/resume" id="skill-bg" class="stackit">
                <div id="skill-itself">
                    <span>RESUME</span>
                </div>
            </NuxtLink>
        </div>
    </div>
    <div v-if="showMessage || showForm" class="motd stackit">
        <div v-if="showMessage" class="message">
            <img src="/deco/svg/uiline1.svg" style="position: absolute; left: 0; right: 0; top: 2%; height: 4%; filter: invert(1)">
            <img src="/deco/svg/uiline1.svg" style="position: absolute; right: 0; bottom: 2%; height: 4%; filter: invert(1); transform: rotate(180deg);">
            <LogoSlider />
            <div class="close-x" @click="enableMessage()">
                <div style="padding: 2px;">
                    <img src="/deco/svg/closebox.svg" style="filter: invert(1);">
                </div>
            </div>
            <div class="message-text-container">
                <div>
                    <span>Hey there, I'm <span style="color: red;">Hudson</span>. The purpose of this website is to <span style="color: red;">demonstrate my abilities.</span> I am eager to provide <span style="color: var(--accent-primary);">creative innovation</span> for your website or business!</span>
                </div>
            </div>
        </div>
        <div v-if="showForm" class="message">
            <img src="/deco/svg/uiline1.svg" style="position: absolute; left: 0; right: 0; top: 2%; height: 4%; filter: invert(1)">
            <img src="/deco/svg/uiline1.svg" style="position: absolute; right: 0; bottom: 2%; height: 4%; filter: invert(1); transform: rotate(180deg);">
            <div class="close-x" @click="enableForm()">
                <div style="padding-top: 2px;">
                    <img src="/deco/svg/closebox.svg" style="filter: invert(1);">
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
let leftMessageSeen = ref(false);
let rightFormSeen = ref(false);
if (localStorage.getItem('leftMessageSeen')) {
    leftMessageSeen.value = true;
} 
if (localStorage.getItem('rightFormSeen')) {
    rightFormSeen.value = true;
}
let showMessage = ref<boolean>(false);
function enableMessage() {
    showMessage.value = !showMessage.value;
    if (!localStorage.getItem('leftMessageSeen') || localStorage.getItem('leftMessageSeen') === 'false') {
        localStorage.setItem('leftMessageSeen', 'true');
        leftMessageSeen.value = true;
    }
}
let showForm = ref<boolean>(false);
function enableForm() {
    showForm.value = !showForm.value;
    if (!localStorage.getItem('rightFormSeen') || localStorage.getItem('rightFormSeen') === 'false') {
        localStorage.setItem('rightFormSeen', 'true');
        rightFormSeen.value = true;
    }
}
</script>


<style scoped>

@media (max-width: 768px) {
    span {
        font-size: .5rem;
    }
    h1 {
        font-size: 1.7rem;
        text-shadow:
    .3rem .3rem 0px var(--accent-primary),
    .6rem .6rem 0px var(--accent-tertiary);
    }
    .weather-icon-addition {
        display: none;
    }
    .weather-icon-itself {
        display: none;
    }
    .deco {
        opacity: 1;
    }
    
}

.message-text-container {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100%;
}
.close-x {
    cursor: pointer; 
    position: absolute; 
    right: 0; 
    top: 0; 
    text-align: center; 
    font-size: 16px; 
    font-weight: bold; 
    color: var(--ui-primary);
}
.message {
    background: var(--background-primary); 
    border: 2px solid var(--ui-primary); 
    z-index: 9999;
    height: 100%;
}
.motd {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 60%;
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

.deco-top-right {
    position: absolute;
    top: 1%;
    right: -3%;
    width: 35%;
    margin: 1%;
    transform: rotate(180deg) scaleY(-1);
}

.deco-bottom-left {
    position: absolute;
    bottom: 0;
    left: -3%;
    width: 35%;
    margin: 2%;
    transform: scaleY(-1);
}

.deco-bottom-right {
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 1%;
}

.greyed-out {
    opacity: .2;
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
    flex-grow: 50%;
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

.scene {
    position: absolute;
    top: -10%;
    left: -4%;
    height: 100%;
    width: 100%;
    z-index: -10;
}

.scene-bottom {
    position: absolute;
    top: 10%;
    right: -6%;
    height: 100%;
    width: 100%;
    z-index: -10;
    transform: scaleX(-1) scaleY(-1);
}

</style>
