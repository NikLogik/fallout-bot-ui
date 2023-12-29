import { ComputedRef, computed } from "vue";
import { useWebApp } from "vue-tg";
import { debug } from "./debug-options";

const webapp = useWebApp()

export type UserDataState = {
    getUsername: ComputedRef<string>
}

export function useUserData(): UserDataState {
    
    function computeUsername(): string {
        if (webapp && webapp.initData) {
            let username = "Anonymous"
            try {
                username = JSON.parse(webapp.initData).user.username
            } catch (e) {
                username = "exception"
            }
            return username
        } else {
            return "Anonymous"
        }
    }
    
    return {
        getUsername: computed(() => computeUsername(), debug)
    }
}