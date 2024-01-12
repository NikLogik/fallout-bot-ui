<template>
    <div class="step-container">
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
.step-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
}

@media screen and (min-width: 20rem) {
    .step-container{
        grid-template-columns: repeat(3, 1fr);
    }
}
</style>