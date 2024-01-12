<template>
    <Button :classes="['btn-close']" @click="router.back" btn-type="button">
        <FontAwesomeIcon icon="arrow-left"/>
    </Button>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
import Button from './Button.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const router = useRouter()
</script>