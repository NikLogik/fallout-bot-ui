<template>
    <button class="btn" 
            :class="props.classes" 
            type="button" 
            :disabled="!props.active"
            @click="onClickInternal">
        <slot/>
    </button>
</template>
<script setup lang="ts">
import { defineProps, defineEmits, withDefaults } from 'vue'

interface Props {
    classes?: string[],
    active?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    classes: () => [],
    active: true
})

const emit = defineEmits<{
  click: []
}>()

const onClickInternal = () => emit("click")

</script>
<style scoped>
.btn {
    background-color: var(--button-color);
    color: var(--button-text-color);
    border: none;
    border-radius: var(--button-default-radius);
}
</style>