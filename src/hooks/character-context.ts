import { ComputedRef, computed, ref } from "vue";

const raceCode = ref<string | null>(null)

export type CharacterContext = {
    getRaceCode: ComputedRef<string | null>
    setRaceCode: (code: string) => void
    clearRaceCode: () => void
}

export function useCharContext(): CharacterContext {

    function setRaceCode(code: string) {
        console.log(code, raceCode.value)
        raceCode.value = code
    }

    function clearRaceCode() {
        raceCode.value = null
    }

    return {
        getRaceCode: computed(() => raceCode.value),
        setRaceCode,
        clearRaceCode
    }
}