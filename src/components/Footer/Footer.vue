<template>
    <footer class="footer-container">
      <Button :class="['btn-forward']"><h4>Forward</h4></Button>
    </footer>
</template>
<script setup lang="ts">
import Button from '../buttons/Button.vue';

</script>
<style>
.footer-container {
    margin: 0.5rem;
}

.btn-forward {
    padding: 0.25rem;
}
</style>