<template>
<section class=" mt-8 h-screen max-w-6xl mx-auto flex flex-col">
    <h1 class="ml-20 text-4xl font-semibold"><span class="text-primary font-bold textGreen">#</span>CONTACT</h1>
<div class="mt-10 form-control flex flex-col gap-4 mx-auto w-full max-w-lg">
  <div class="flex gap-4">
      <div class=" w-72">
       <label class="label">
    <span class="label-text">Name</span>
  </label>
  <input type="text" placeholder="Your name" class="input input-bordered input-primary w-full">
  </div>
 <div class="w-72">
 <label class="label">
    <span class="label-text">Email*</span>
  </label>
  <input type="text" placeholder="email@example.com" class="input input-primary input-bordered w-full">
 </div>
  </div>
 <div class="w-full mx-auto">
 <label class="label">
    <span class="label-text">Subject</span>
  </label>
  <input type="text" placeholder="Type here" class="input input-primary input-bordered w-full">
 </div>
  <div class="mx-auto w-full">
<div class="form-control">
  <label class="label">
    <span class="label-text">Message*</span>
  </label> 
  <textarea class="textarea textarea-primary textarea-bordered h-24" placeholder="Bio"></textarea>
</div>
 </div>
<button class="btn btn-primary">Send</button>
</div>

</section>
</template>

<script>
</script>

<style>
    .greenText{
    color: rgb(30, 184, 84)
    }
</style>