<template>
  <MainPage/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainPage from './components/MainPage.vue';

export default defineComponent({
  name: 'App',
  components: {
    'MainPage': MainPage
  }
});
</script>

<style>
#app {
  background: var(--tg-theme-secondary-bg-color);
  color: var(--tg-theme-text-color);
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
