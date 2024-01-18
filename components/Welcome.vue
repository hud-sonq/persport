<template>
    <div class="deco-top-right">
        <img style="height: 100%; width: 100%; object-fit: contain; filter: invert(1)" src="/deco/svg/uiline1.svg">
    </div>
    <div class="deco-bottom-left">
        <img style="height: 100%; width: 100%; object-fit: contain; filter: invert(1)" src="/deco/svg/uiline1.svg">
    </div>
    <div class="deco-bottom-right" style="filter: invert(1)">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><rect width="9" height="9" x="1.5" y="1.5" fill="currentColor" rx="1"><animate id="svgSpinnersBlocksScale0" attributeName="x" begin="0;svgSpinnersBlocksScale1.end+0.15s" dur="0.6s" keyTimes="0;.2;1" values="1.5;.5;1.5"/><animate attributeName="y" begin="0;svgSpinnersBlocksScale1.end+0.15s" dur="0.6s" keyTimes="0;.2;1" values="1.5;.5;1.5"/><animate attributeName="width" begin="0;svgSpinnersBlocksScale1.end+0.15s" dur="0.6s" keyTimes="0;.2;1" values="9;11;9"/><animate attributeName="height" begin="0;svgSpinnersBlocksScale1.end+0.15s" dur="0.6s" keyTimes="0;.2;1" values="9;11;9"/></rect><rect width="9" height="9" x="13.5" y="1.5" fill="currentColor" rx="1"><animate attributeName="x" begin="svgSpinnersBlocksScale0.begin+0.15s" dur="0.6s" keyTimes="0;.2;1" values="13.5;12.5;13.5"/><animate attributeName="y" begin="svgSpinnersBlocksScale0.begin+0.15s" dur="0.6s" keyTimes="0;.2;1" values="1.5;.5;1.5"/><animate attributeName="width" begin="svgSpinnersBlocksScale0.begin+0.15s" dur="0.6s" keyTimes="0;.2;1" values="9;11;9"/><animate attributeName="height" begin="svgSpinnersBlocksScale0.begin+0.15s" dur="0.6s" keyTimes="0;.2;1" values="9;11;9"/></rect><rect width="9" height="9" x="13.5" y="13.5" fill="currentColor" rx="1"><animate attributeName="x" begin="svgSpinnersBlocksScale0.begin+0.3s" dur="0.6s" keyTimes="0;.2;1" values="13.5;12.5;13.5"/><animate attributeName="y" begin="svgSpinnersBlocksScale0.begin+0.3s" dur="0.6s" keyTimes="0;.2;1" values="13.5;12.5;13.5"/><animate attributeName="width" begin="svgSpinnersBlocksScale0.begin+0.3s" dur="0.6s" keyTimes="0;.2;1" values="9;11;9"/><animate attributeName="height" begin="svgSpinnersBlocksScale0.begin+0.3s" dur="0.6s" keyTimes="0;.2;1" values="9;11;9"/></rect><rect width="9" height="9" x="1.5" y="13.5" fill="currentColor" rx="1"><animate id="svgSpinnersBlocksScale1" attributeName="x" begin="svgSpinnersBlocksScale0.begin+0.45s" dur="0.6s" keyTimes="0;.2;1" values="1.5;.5;1.5"/><animate attributeName="y" begin="svgSpinnersBlocksScale0.begin+0.45s" dur="0.6s" keyTimes="0;.2;1" values="13.5;12.5;13.5"/><animate attributeName="width" begin="svgSpinnersBlocksScale0.begin+0.45s" dur="0.6s" keyTimes="0;.2;1" values="9;11;9"/><animate attributeName="height" begin="svgSpinnersBlocksScale0.begin+0.45s" dur="0.6s" keyTimes="0;.2;1" values="9;11;9"/></rect></svg>
    </div>
    <div class="welcome" id="welcome" ref="welcome" >
        <div class="welcome-container">
            <div id="bracketable" ref="bracketable">
                <div class="bracket bracket-top-left"></div>
                <div class="bracket bracket-bottom-right"></div>
                <div id="welcomeText" ref="welcomeText" class="">
                    <h1 class="stackit-text welcome-h1">WELCOME</h1>
                    <div class="welcome-bang-container">
                        <div class="welcome-bang" v-if="!showMessage"><img :class="{ 'deco-blink': !leftMessageSeen, 'greyed-out': leftMessageSeen }" style="cursor: pointer;" src="/deco/svg/bang.svg" class="bang-itself" @click="enableMessage()"></div>
                    </div>
                </div>
                <div id="skillBox" ref="skillBox" class="">
                    <NuxtLink to="/dev" id="skill-bg" class="stackit-top-left skill-link-div">
                        <div class="g-deco">
                            <div class="dev-dual">
                                <div><img src="/deco/svg/dev_icon.svg" style="height: 100%; width: 100%; object-fit: contain; filter: invert(1)"></div>
                                <div style="padding-left: 2px; padding-right: 3px;"><span>+</span></div>
                                <div><img src="/deco/svg/cloud.svg" style="height: 100%; width: 100%; object-fit: contain; filter: invert(1)"></div>
                            </div>
                        </div>
                        <div id="skill-itself">
                            <span>DEVELOPMENT</span>
                        </div>
                    </NuxtLink>
                    <NuxtLink to="/graphics" id="skill-bg" class="stackit-top-right skill-link-div">
                        <div class="g-deco">
                            <div><img src="/deco/svg/3d_icon.svg" style="height: 100%; width: 100%; object-fit: contain; filter: invert(1)"></div>
                        </div>
                        <div id="skill-itself">
                            <span>GRAPHICS AND 3D</span>
                        </div>
                    </NuxtLink>
                    <NuxtLink to="/sound" id="skill-bg" class="stackit-bottom-left skill-link-div">
                        <div class="g-deco">
                            <div><img src="/deco/svg/sound_icon.svg" style="height: 100%; width: 100%; object-fit: contain; filter: invert(1)"></div>
                        </div>
                        <div id="skill-itself">
                            <span>SOUND</span>
                        </div>
                    </NuxtLink>
                    <NuxtLink to="/resume" id="skill-bg" class="stackit skill-link-div">
                        <div class="g-deco">
                            <div><img src="/deco/svg/guy_icon.svg" style="height: 100%; width: 100%; object-fit: contain; filter: invert(1)"></div>
                        </div>
                        <div id="skill-itself">
                            <span>ABOUT ME</span>
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
    <div v-if="showMessage" class="motd">
        <div v-if="showMessage" class="message">
            <img src="/deco/svg/uiline1.svg" style="position: absolute; left: 0; right: 0; top: 2%; height: 4%; filter: invert(1)">
            <img src="/deco/svg/uiline1.svg" style="position: absolute; right: 0; bottom: 2%; height: 4%; filter: invert(1); transform: rotate(180deg);">
            <LogoSlider />
            <div class="close-x" @click="enableMessage()">
                <div style="position: absolute; right: -6px;">
                    <img class="close-x-deco" src="/deco/svg/closebox.svg" style="filter: invert(1);">
                </div>
            </div>
            <div class="message-text-container">
                <div style="padding-top: 12px; padding-bottom: 14px;">
                    <span>Hey there, I'm <span style="color: red;">Hudson</span>. The purpose of this website is to <span style="color: red;">demonstrate my abilities.</span> I am eager to provide <span style="color: var(--accent-primary);">creative innovation</span> for your website or business!</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
let leftMessageSeen = ref(false);
let rightFormSeen = ref(false);
const welcomeText = ref<HTMLElement | null>(null);
const skillBox = ref<HTMLElement | null>(null);
const bracketable = ref<HTMLElement | null>(null);
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
// let showForm = ref<boolean>(false);
// function enableForm() {
//     showForm.value = !showForm.value;
//     if (!localStorage.getItem('rightFormSeen') || localStorage.getItem('rightFormSeen') === 'false') {
//         localStorage.setItem('rightFormSeen', 'true');
//         rightFormSeen.value = true;
//     }
// }

onMounted(() => {
    setTimeout(() => {
        if (bracketable.value) {
            bracketable.value.classList.add('active');
        }
    }, 400);
    setTimeout(() => {
        if (welcomeText.value && skillBox.value) {
            welcomeText.value.classList.add('active');
            skillBox.value.classList.add('active');
        }
    }, 600);
});
</script>


<style scoped>
.close-x-deco {
    height: 32px;
    width: 32px;
}

span {
    font-weight: bold;
}
.welcome-bang-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    filter: invert(1);
    margin-left: 12px;
}

.welcome-bang {
    display: flex;
    justify-content: center;
    align-items: center;
}

.bang-itself {
    height: 48px;
    width: 48px;
}

.bracket-top-left {
  position: absolute;
  border-left: 4px solid var(--ui-primary);
  border-top: 4px solid var(--ui-primary);
  top: 24.4%;
  left: 2%;
  height: 20px;
  width: 20px;
}

.bracket-bottom-right {
  position: absolute;
  border-right: 4px solid var(--ui-primary);
  border-bottom: 4px solid var(--ui-primary);
  bottom: 2%;
  right: 2%;
  height: 20px;
  width: 20px;
}

.g-deco {
    position: absolute;
    display: flex;
    bottom: 4px;
    left: 4px;
    width: 100%;
    height: 30%;
    opacity: 1;
}

.dev-dual {
    height: 100%;
    width: 50%;
    display: flex;
}


#bracketable {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
}

.bracket {
    opacity: 0;
}

#bracketable.active > .bracket {
    opacity: 1;
    transition: opacity 0s ease-in-out;
    animation: bangblink 1s linear;
}

.g-deco.active {
    opacity: 1;
    transition: opacity 1.8s ease-in-out
}
.welcome-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    transition: border .6s ease-in-out, text-shadow .3s ease-in-out;
    width: 100%;
    height: 100%;
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
    top: 1px; 
    text-align: center; 
    font-size: 16px; 
    font-weight: bold; 
    color: var(--ui-primary);
}
.message {
    background: var(--background-primary); 
    border: 4px solid var(--ui-primary); 
    z-index: 2;
    height: 100%;
    width: 100%;
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
    width: 48px;
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
    display: flex;
    justify-content: flex-end;
}

.greyed-out {
    opacity: .5;
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
    width: 100%;
    height: 100%;
}

#welcomeText {
    position: relative;
    display: flex;
    overflow: auto;
    justify-content: center;
    opacity: 0;
    max-width: 100%;
    height: 64px;
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

#welcomeText.active {
    opacity: 1;
    pointer-events: all;
}

#skillBox {
    opacity: 0;
    transition: opacity .3s ease-in-out, top .6s ease-in-out;
    top: 50%;
    position: relative;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
    margin: 5%;
    width: 90%;
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

.skill-link-div {
    object-fit: scale-down;
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
@media (max-width: 768px) {
    span {
        font-size: .48rem;
    }
    h1 {
        font-size: 1.7rem;
        text-shadow:
    .3rem .3rem 0px var(--accent-primary),
    }
    .deco {
        opacity: 1;
    }
    .welcome-bang {
        width: 38px;
    }
    .close-x-deco {
        width: 20px;
        height: 20px;
    }
    .bang-itself {
        width: 30px;
        height: 30px;
    }
    .welcome-bang-container {
        margin-right: 0;
    }
}
</style>