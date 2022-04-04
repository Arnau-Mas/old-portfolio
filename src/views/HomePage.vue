<script setup>
    import MainTools from "../components/MainTools.vue";
</script>
<template>
    <div class=" hero sm:mt-14 2xl:mt-28">
    <div class="hero-content flex-col lg:flex-row">
        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQEiiSZIJ3tVWg/profile-displayphoto-shrink_800_800/0/1613426784148?e=2147483647&v=beta&t=Nn74ZVqYr4n743DRAakp066WiixOMOzPXUjS7HPuMMc" class="max-w-sm rounded-full shadow-2xl" />
        <div class="ml-10 text-left">
        <h1 class="text-5xl font-bold">Junior Web Developer</h1>
        <div class="mt-3 flex flex-row gap-2">
        <div class="badge badge-outline">web</div>
        <div class="badge badge-secondary badge-outline">frontend</div>
        <div class="badge badge-accent badge-outline">backend</div>
        </div>
        <p class="py-4 max-w-xl">I am a <span class="greenText">Junior Web Developer</span> looking for a job as Frontend or Full Stack.<br> I've been programming for 1 year and I love it. Since I descovered this world I've been continously studying.</p>
        <button class="btn btn-primary">MORE ABOUT</button>
        </div>
    </div>
    </div>
    <MainTools/>
</template>