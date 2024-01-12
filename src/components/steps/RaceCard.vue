<template>
    <div class="race-card">
        <Button :classes="['race-card-button']" btn-type="button">
            <h4>{{ props.name }}</h4>
        </Button>
    </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';
import Button from '../buttons/Button.vue'


interface Props {
    code: string
    name: string
}

const props = defineProps<Props>()

</script>
<style scoped>
.race-card {
    background: var(--secondary-bg-color);
    height: 4rem;
}

.race-card-button {
    width: 100%;
    height: 100%;
}
</style>