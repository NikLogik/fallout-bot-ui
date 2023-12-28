<template>
  <MainPage :v-if="isReady"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainPage from './components/MainPage.vue';
import { useWebApp } from 'vue-tg';

export default defineComponent({
  name: 'App',
  components: {
    'MainPage': MainPage
  },
  computed: {
    isReady: () => true
  }
});
</script>

<style>
#app {
  background: var(--tg-theme-bg-color);
  color: var(--tg-theme-text-color);
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
