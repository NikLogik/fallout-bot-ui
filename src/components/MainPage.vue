<template>
    <span>
        Hello, {{ username }}
    </span>
</template>
<script setup lang="ts">
import { useWebApp } from 'vue-tg';

const webapp = useWebApp()

const username = webapp.initData

</script>