<template>
    <Header/>
    <RouterView/>
    <!-- <Footer/> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/Header/Header.vue';
import Footer from './components/Footer/Footer.vue';

export default defineComponent({
  name: 'App',
  components: {
    Header,
    // Footer
}
});
</script>
<style>
@import url("./app.css");
</style>
