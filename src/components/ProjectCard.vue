<script setup>
    defineProps({
        title: String,
        description: String,
        imageUrl: String,
        projectUrl: String
    })

</script>
<template>
<!-- o bg-nseq 100 --><div class="card card-compact w-80 bg-base-300 bg-opacity-50 border-2 border-gray-200 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">{{title}}</h2>
    <p>{{description}}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-outline btn-primary"><a :href="projectUrl" target="_blank">LINK</a></button>
      <button class="btn btn-primary">More</button>
    </div>
  </div>
</div>


<!--  -->
<!-- <div class="card w-80 shadow-xl">
  <figure class="px-10 pt-10">
    <img :src="imageUrl" :alt="title" class="rounded-xl h-36" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">{{title}}</h2>
    <p>{{description}}</p>
    <div class="card-actions">
      <button class="btn btn-primary"><a :href="projectUrl">More</a></button>
    </div>
  </div>
</div> -->
</template>