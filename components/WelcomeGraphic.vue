<template>
    <div class="container">
        <div id="text-centered">
            <div>
                <h1>WELCOME</h1>
            </div>
            <div>
                <p>HI, MY NAME IS HUDSON. I AM A MULTIMEDIA ARTIST FROM TENNESSEE.</p>
            </div>
            <div>
                <p>I HOPE YOU ENJOY THE SITE!</p>
            </div>
        </div>
        <div id="skills-grid">
            <div class="skill-bg">
                <div class="skill">
                    <div class="text">
                        <p>UX, UI, & DEV</p>
                    </div>
                </div>
            </div>
            <div class="skill-bg">
                <div class="skill">
                    <div class="text">
                        <p>UX, UI, & DEV</p>
                    </div>
                </div>
            </div>
            <div class="skill-bg">
                <div class="skill">
                    <div class="text">
                        <p>UX, UI, & DEV</p>
                    </div>
                </div>
            </div>
            <div class="skill-bg">
                <div class="skill">
                    <div class="text">
                        <p>UX, UI, & DEV</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>

.container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    margin: 10%;
}

#text-centered {
    margin: 10px;
    display: flex;
    flex-direction: column;
}

#skills-grid {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    flex: 1;
    margin-bottom: 10%;
    justify-content: center;
}

.skill {
    border: 1px solid var(--ui-main-color);
    display: flex; 
    flex-basis: calc(50% - 40px);  
    justify-content: center;
    flex-direction: column;
    margin: 10px;
    transition: transform 180ms ease-out;
    transform-style: preserve-3d;
    cursor: pointer;
}

</style>
