<template>
    <span>
        Hello, {{ username }}
    </span>
    <button @click="close">Close</button>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { useWebApp } from 'vue-tg';

const webapp = useWebApp()

const username = computed(() => {
    if (webapp && webapp.initData) {
        return JSON.parse(webapp?.initData)?.user?.username;
    } else {
        return "test"
    }
})

const close = () => {
    webapp.sendData("You have closed App")
}

</script>