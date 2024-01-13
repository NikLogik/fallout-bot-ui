<template>
    <header class="header-container">
        <CloseButton/>
    </header>
</template>
<script setup lang="ts">
import CloseButton from '../buttons/CloseButton.vue';
</script>
<style scoped>
.header-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin: 0.5rem 0.5rem 0.5rem 0.5rem;
}
</style>
