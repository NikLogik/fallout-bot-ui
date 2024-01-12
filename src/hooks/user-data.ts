import { ComputedRef, computed, ref } from "vue";
import { useWebApp } from "vue-tg";
import { debug } from "./debug-options";
import readInitData from "@/utils/readInitData";

export interface UserData {
    id: number
    first_name: string
    last_name: string
    username: string
}

export type UserDataState = {
    getUserData: ComputedRef<UserData | undefined>
    hasUserData: ComputedRef<boolean>
}

const webApp = useWebApp()
const userData = ref<UserData>()

export function useUserData(): UserDataState {

    if (!userData.value) {
        const initData = readInitData(webApp.initData)
        if (initData.has("user")) {
            userData.value = initData.get("user") as UserData
        }
    }

    function existsUserData(): boolean {
        return userData.value !== null && userData.value !== undefined ? true : false
    }
    
    return {
        hasUserData: computed(() => existsUserData(), debug),
        getUserData: computed(() => userData.value, debug)
    }
}