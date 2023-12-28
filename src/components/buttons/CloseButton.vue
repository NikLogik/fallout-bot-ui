<template>
    <Button :on-click="closeApp"><span>Close</span></Button>
</template>
<script setup lang="ts">
import { useWebApp } from 'vue-tg';
import Button from './Button.vue'

const webapp = useWebApp()

function closeApp() {
    webapp.close()
}
</script>