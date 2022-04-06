<script setup>
    import ProjectCard from './ProjectCard.vue';
</script>
<template>
    <section class="max-w-5xl mx-auto mt-16">
        <h3 class="text-4xl font-bold"><span class="text-primary font-bold textGreen">#</span> Top Projects</h3>
        <article class="flex flex-row flex-wrap mx-auto justify-between mt-12">
            <ProjectCard :title="'todoapp'" :description="'To-do list app made with Vue 3'" imageUrl="/src/assets/todo-logo.png" projectUrl="https://boisterous-zabaione-16e9b0.netlify.app/" />
            <ProjectCard :title="'avisa-me'" imageUrl="/src/assets/logo_avisame.png" :description="'Note taking app made with Node.js'"/>
            <ProjectCard :title="'Circle studio'" imageUrl="/src/assets/circle-logo.png" :description="'Web demo of design studio made only with CSS'"/>
        </article> 
    </section>
</template>