<template>
    <button class="btn" :class="props.classes" :type="props.btnType" @click="onClickInternal">
        <slot/>
    </button>
</template>
<script setup lang="ts">
import { defineProps, defineEmits, withDefaults } from 'vue'

interface Props {
    btnType: "button" | "submit" | "reset" | undefined
    classes?: string[] 
}

const props = withDefaults(defineProps<Props>(), {
    btnType: "button",
    classes: () => []
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