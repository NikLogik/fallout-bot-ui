<template>
    <div class="step">
        <div class="race-container">
            <div class="race-step-item" v-for="race in races" :key="race.code">
                <RaceCard :name="race.name" :code="race.code"/>
            </div>
        </div>
        <div class="bottom-panel">
            <Button :class="['btn-back']" @click="back"><h4>Назад</h4></Button>
            <Button :class="['btn-forward']"><h4>Дальше</h4></Button>
        </div>
    </div>
</template>
<script setup lang="ts">
import RaceCard from "./RaceCard.vue";
import races from "../../utils/races";
import Button from "../buttons/Button.vue";
import { useRouter } from "vue-router";
import { useCharContext } from "@/hooks/character-context";

const context = useCharContext()

const router = useRouter()

function back() {
    context.clearRaceCode()
    router.back()
}

</script>
<style scoped>
@import url("./step.css");

.step {
    display: grid;
    grid-template-rows: 1fr auto;
}

.race-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: min-content;
    gap: 0.5rem;
}

@media screen and (min-width: 20rem) {
    .race-container {
        grid-template-columns: repeat(3, 1fr);
    }
}

.bottom-panel {
    margin-top: 0.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.btn-forward, .btn-back {
    padding: 0.25rem;
}
</style>