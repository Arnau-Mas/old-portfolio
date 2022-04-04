<script setup>
import HomePage from './views/HomePage.vue';
import MainTools from './views/MainTools.vue';
</script>

<template>
<div class="	transition-property: all max-w-6xl mx-auto" data-theme="forest">
<div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Projects</a></li>
        <li><a>Technologies</a></li>
        <li><a>About</a></li>
      </ul>
    </div>
    <a class="btn btn-ghost normal-case text-xl">Arnau Mas</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
      <li><a>Projects</a></li>
      <li><a>Technologies</a></li>
      <li><a>About</a></li>
    </ul>
  </div>
  <div class="navbar-end">
    <a class="btn btn-primary">Contact</a>
  </div>
</div>
<!-- hero -->
<HomePage></HomePage>
<!-- main tools -->
<MainTools/>
<div>
  
</div>
<div>

</div>
</div>
</template>
<style>
.greenText{
  color: rgb(30, 184, 84)
}
</style>
