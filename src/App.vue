<script setup>
import HomePage from './views/HomePage.vue';
import {ref} from 'vue';
let isChecked = ref("true");
let dataTheme = ref("forest");
function changeChecked(){
  isChecked.value = !isChecked.value
  if(dataTheme.value == 'forest'){
    dataTheme.value = 'emerald'
  }else{
    dataTheme.value = 'forest'
  }
}
</script>

<template>
<div class="transition-property:all bg-base-100 h-full" :data-theme="dataTheme">
<div class="navbar bg-base-100 max-w-6xl mx-auto">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><router-link to="projects">Projects</router-link></li>
        <li><router-link to="technologies">Technologies</router-link></li>
        <li><router-link to="about">About</router-link></li>
      </ul>
    </div>
    <router-link to="/" class="btn btn-ghost normal-case text-xl">Arnau Mas</router-link>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
      <li><router-link to="projects">Projects</router-link></li>
      <li><router-link to="technologies">Technologies</router-link></li>
      <li><router-link to="about">About</router-link></li>
    </ul>
  </div>
  <div class="navbar-end gap-2">
    <div class="form-control">
  <label class="label cursor-pointer">
    <input @change="changeChecked" type="checkbox" class="toggle toggle-primary" :checked="isChecked">
  </label>
</div>
    <router-link to="contact" class="btn btn-primary">Contact</router-link>
  </div>
</div>
<!-- view -->
<router-view></router-view>
<!-- /view -->

</div>
</template>
<style>
.greenText{
  color: rgb(30, 184, 84)
}
</style>
