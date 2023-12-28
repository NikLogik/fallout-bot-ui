<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <span>Hello </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: var(--tg-theme-bg-color);
  color: var(--tg-theme-text-color);
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
