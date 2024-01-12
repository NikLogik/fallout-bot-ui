<template>
  <div>
    <Header/>
    <MainPage/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/Header/Header.vue';
import MainPage from './components/MainPage.vue';

export default defineComponent({
  name: 'App',
  components: {
    Header,
    MainPage
}
});
</script>

<style>
@import url("./app.css");

</style>
