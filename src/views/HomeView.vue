<template>
  <div class="home">
    <div>
      <button class="btn" v-on:click="decreaseCounter">-</button>
      <span class="counter">{{ counter }}</span>
      <button class="btn" v-on:click="increaseCounter">+</button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        counter: 0
      }
    },
    methods: {
      increaseCounter() {
        this.counter++;
      },
      decreaseCounter() {
        this.counter--;
      }
    }
  }
</script>

<style>
  .home {
    text-align: center;
    padding: 20px;
  }

  .btn, .counter {
    font-size: 40px;
    margin: 10px;
    min-width: 50px;
  }
</style>