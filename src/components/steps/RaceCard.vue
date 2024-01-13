<template>
    <div class="race-card">
        <Button 
            :classes="['race-card-button']" 
            @click="context.setRaceCode(props.code)">
                <h4>{{ props.name }}</h4>
        </Button>
    </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';
import Button from '../buttons/Button.vue'
import { useCharContext } from '@/hooks/character-context';

interface Props {
    code: string
    name: string
}

const context = useCharContext()

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