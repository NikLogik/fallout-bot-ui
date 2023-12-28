import { ComputedRef, computed, ref } from "vue";
import { useWebApp } from "vue-tg";
import { debug } from "./debug-options";

const webapp = useWebApp()

export type UserDataState = {
    getUsername: ComputedRef<string>
}

export function useUserData(): UserDataState {
    
    function computeUsername(): string {
        if (webapp && webapp.initData) {
            const username =  JSON.parse(webapp.initData).user.username
            return username ? username : "Anonymous"
        } else {
            return "Anonymous"
        }
    }
    
    return {
        getUsername: computed(() => computeUsername(), debug)
    }
}