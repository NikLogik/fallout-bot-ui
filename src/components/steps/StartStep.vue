<template>
    <div class="step start-step-container">
        <Button :classes="['btn-start']" :onclick="nextStep">
            <h3>Начать создание персонажа</h3>
        </Button>
    </div>
</template>
<script setup lang="ts">
import Button from '../buttons/Button.vue';
import { useRouter } from 'vue-router'

const router = useRouter()

function nextStep() {
    router.push('races')
}
</script>
<style scoped>
@import url("./step.css");

.start-step-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.btn-start {
    padding: 1rem 0;
}
</style>