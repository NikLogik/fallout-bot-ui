<template>
    <button class="btn-close" :type="props.btnType">
        <slot/>
    </button>
</template>
<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'

interface Props {
    btnType: "button" | "submit" | "reset" | undefined
}

const props = withDefaults(defineProps<Props>(), {
    btnType: "button"
})


</script>
<style scoped>
.btn-close {
    background-color: var(--tg-theme-button-color);
    color: var(--tg-theme-button-text-color);

}
</style>