<template>
    <div class="start-step-container">
        <Button :classes="['btn-start']" :onclick="nextStep" btn-type="button">
            <h2>Начать создание персонажа</h2>
        </Button>
    </div>
</template>
<script setup lang="ts">
import Button from '../buttons/Button.vue';
import { useRouter } from 'vue-router'

const router = useRouter()

const nextStep = () => {
    router.push('races')
}
</script>
<style>
.start-step-container {
    display: flex;
}
.btn-start {
    width: 100%;
}
</style>