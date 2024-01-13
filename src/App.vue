<template>
    <Header/>
    <RouterView/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/Header/Header.vue';

export default defineComponent({
  name: 'App',
  components: {
    Header,
}
});
</script>
<style>
@import url("./app.css");
</style>
