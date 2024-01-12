<template>
    <div class="header-tg">
        <BackButton/>
        <CloseButton/>
    </div>
</template>
<script setup lang="ts">
import BackButton from '../buttons/BackButton.vue';
import CloseButton from '../buttons/CloseButton.vue';
</script>
<style scoped>
.header-tg {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 0.5rem;
}
</style>
