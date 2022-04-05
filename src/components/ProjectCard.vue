<script setup>
    defineProps({
        title: String,
        description: String,
        imageUrl: String,
        projectUrl: String
    })

</script>
<template>
<!-- o bg-nseq 100 -->
<div class="card w-80 bg-opacity-10 bg-gray-700 shadow-xl">
  <figure><img :src="imageUrl" :alt="title"/></figure>
  <div class="card-body">
    <h2 class="card-title">{{title}}</h2>
    <p>{{description}}</p>
    <div class="card-actions justify-end">
      <button class="btn border-primary bg-gray-700 bg-opacity-10">Demo</button>
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