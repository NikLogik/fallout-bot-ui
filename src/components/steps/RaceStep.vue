<template>
    <div class="step-tg race-step-container">
        <div class="race-step-item" v-for="race in races" :key="race.code">
            <RaceCard :name="race.name" :code="race.code"/>
        </div>
    </div>
</template>
<script setup lang="ts">
import RaceCard from "./RaceCard.vue";
import races from "../../utils/races";

</script>
<style>
    .step-tg {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .race-step-container {
        gap: 10px;
    }
    
</style>