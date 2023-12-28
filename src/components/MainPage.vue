<template>
    <span>
        Hello, {{ username }}
    </span>
    <button @click="close">Close</button>
</template>
<script setup lang="ts">
import { useWebApp } from 'vue-tg';

const webapp = useWebApp()

const username = "test"
const close = () => {
    webapp.sendData("You have closed App")
}

</script>