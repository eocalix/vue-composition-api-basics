<template>
  <div class="about">
    <h1>About</h1>
    <textarea name="txtDemo" id="txtDemo" cols="30" rows="10" v-autofocus></textarea>
  </div>
</template>

<script setup>
import { vAutofocus } from '@/directives/vAutofocus'
</script>