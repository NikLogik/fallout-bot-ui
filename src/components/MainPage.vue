<template>
    <span>
        Hello, {{ username }}
        <button @click="close">Close</button>
    </span>
</template>
<script setup lang="ts">
import { useWebApp } from 'vue-tg';

const webapp = useWebApp()

const username = JSON.parse(webapp.initData).user.username;

const close = () => {
    useWebApp().sendData("You have closed App")
}

</script>