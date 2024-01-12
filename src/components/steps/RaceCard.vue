<template>
    <div class="race-card">
        <Button btn-type="button">
            <span>{{ props.name }}</span>
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