<template>
    <NavBar />
    <div class="split-container active">
        <div class="left stackit">
            <LeftTerminal/>
        </div>
        <div class="right stackit">
            <slot />
        </div>
    </div>
</template>