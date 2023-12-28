<template>
    <Button @click="closeApp" btn-type="button"><span>Close</span></Button>
</template>
<script setup lang="ts">
import { useWebApp } from 'vue-tg';
import Button from './Button.vue'

const webapp = useWebApp()

function closeApp() {
    webapp.close()
}
</script>