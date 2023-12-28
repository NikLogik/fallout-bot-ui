import { DebuggerOptions } from "vue";

export const debug: DebuggerOptions = {
    onTrack: (event) => console.log(event)
}