<template>
    <div class="header-tg">
        <CloseButton/>
    </div>
</template>
<script setup lang="ts">
import CloseButton from '../buttons/CloseButton.vue';
</script>
<style scoped>
.header-tg {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}
</style>
