<template>
    <button class="btn-close" :type="props.btnType" @click="onClickInternal">
        <slot/>
    </button>
</template>
<script setup lang="ts">
import { defineProps, defineEmits, withDefaults } from 'vue'

interface Props {
    btnType: "button" | "submit" | "reset" | undefined
}

const props = withDefaults(defineProps<Props>(), {
    btnType: "button"
})

const emit = defineEmits<{
  click: []
}>()

const onClickInternal = () => emit("click")

</script>
<style scoped>
.btn-close {
    background-color: var(--tg-theme-button-color);
    color: var(--tg-theme-button-text-color);
    border: none;
}
</style>