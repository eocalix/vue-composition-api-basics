<template>
  <div class="routes">
    <h1>Routes</h1>
    <ul>
      <li>
        <router-link to="/routeDetail/3">Post 1</router-link>
      </li>
      <li>
        <router-link to="/routeDetail/2">Post 2</router-link>
      </li>
      <li>
        <router-link to="/routeDetail/3">Post 3</router-link>
      </li>
    </ul>
    <textarea v-autofocus></textarea>
  </div>
</template>

<script setup>
  import { vAutofocus } from '@/directives/vAutofocus'
</script>

<style scoped>
  ul {
    margin-bottom: 30px;
  }
</style>