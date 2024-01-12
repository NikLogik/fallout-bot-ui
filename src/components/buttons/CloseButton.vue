<template>
    <Button :classes="['btn-close']" @click="closeApp" btn-type="button">
            <FontAwesomeIcon icon="xmark" style="color: var(--secondary-bg-color)"/>
    </Button>
</template>
<script setup lang="ts">
import { useWebApp } from 'vue-tg';
import Button from './Button.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


const webapp = useWebApp()

function closeApp() {
    webapp.close()
}
</script>