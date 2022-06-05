<template>
  <div class="user-data">
    {{ userData.name }} @{{ userData.username }}
  </div>
  <nav>
    <RouterLink to="/options-api">Options API</RouterLink>
    <RouterLink to="/composition-api">Composition API</RouterLink>
    <RouterLink to="/data-ref-reactive">Data, Ref, Reactive</RouterLink>
    <RouterLink to="/method-computed-watch">Method, Computed, Watch</RouterLink>
    <RouterLink to="/lifecycle-hooks">Lifecycle Hooks</RouterLink>
    <RouterLink to="/directives">Directives</RouterLink>
    <RouterLink to="/routes">Routes</RouterLink>
    <RouterLink to="/lists">Lists</RouterLink>
    <RouterLink to="/template-refs">Template Refs</RouterLink>
    <RouterLink to="/teleport-slots">Teleport, Slots</RouterLink>
    <RouterLink to="/props-emits">Props & Emits</RouterLink>
    <RouterLink to="/dynamic-components">Dynamic Components</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>
  <!--<RouterView v-slot="{ Component }">
    <KeepAlive>
      <Component :is="Component" />
    </KeepAlive>
  </RouterView>-->
  <!--<RouterView v-bind:userData="userData" />-->
  <RouterView />
</template>

<script setup>
  /*
    imports
  */
  import { ref, provide } from 'vue'
  import { RouterLink, RouterView } from 'vue-router'

  /*
    user data
  */

  const userData = ref({
    name: 'Edwin',
    username: 'eocalix'
  })

  provide('userData', userData.value);

</script>

<style>
@import '@/assets/base.css';

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.user-data {
  position: absolute;
  background: beige;
  top: 5px;
  right: 5px;
  font-size: 12px;
  padding: 5px;
  color: #333;
}

</style>
