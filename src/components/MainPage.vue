<template>
    <div>
        <Header/>
        <span>
            <!-- Hello, {{ getUsername }} -->
        </span>
    </div>
</template>
<script setup lang="ts">
import Header from './Header/Header.vue';
import { useUserData } from '../hooks/user-data';

// const { getUsername } = useUserData()

</script>