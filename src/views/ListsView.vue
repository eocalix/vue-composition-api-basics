<template>
  <div class="posts">
    <h1>Posts</h1>
    <ul>
      <li v-for="post in posts" v-bind:key="post.id">
        <router-link v-bind:to="`/routeDetail/${ post.id }`">{{ post.title }}</router-link>
      </li>
      <!-- <li>
        <router-link to="/routeDetail/2">Post 2</router-link>
      </li>
      <li>
        <router-link to="/routeDetail/3">Post 3</router-link>
      </li> -->
    </ul>
    <textarea v-autofocus></textarea>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import { vAutofocus } from '@/directives/vAutofocus'

  const posts = ref([
    {
      id: 1,
      title: 'Post 1'
    },
    {
      id: 2,
      title: 'Post 2'
    },
    {
      id: 3,
      title: 'Post 3'
    }
  ]);
</script>

<style scoped>
  ul {
    margin-bottom: 30px;
  }
</style>