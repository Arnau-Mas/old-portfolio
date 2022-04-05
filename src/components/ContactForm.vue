<template>
   <div class="mt-5 form-control flex flex-col gap-4 mx-auto w-full max-w-lg">
  <h1 class="max-w-lg text-3xl font-semibold"><span class="text-primary font-bold textGreen">#</span>LET'S TALK!</h1>
    <div class="flex sm:flex-row flex-col gap-4">
        <div class=" sm:w-72">
        <label class="label">
      <span class="label-text">Name</span>
    </label>
    <input type="text" placeholder="Your name" class="input input-bordered input-primary w-full">
    </div>
  <div class="sm:w-72">
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
    <textarea class="textarea textarea-primary textarea-bordered h-24" placeholder="Type here"></textarea>
  </div>
  </div>
  <button class="btn btn-primary">Send</button>
  </div>
</template>

<script>
</script>

<style>

</style>