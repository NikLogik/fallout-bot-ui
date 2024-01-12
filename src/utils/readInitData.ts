export default function (initData: string): Map<string, any> { 
    try {
        return tryParse(initData)
    } catch (e) {
        console.log("initData processing error. returns empty map")
        return new Map()
    }
}

function tryParse(query: string): Map<string, any> {
    const params = new Map<string, string>()
    const decodedURI = decodeURIComponent(query)
    decodedURI.split("&").forEach(pair => {
        const [key, value] = pair.split("=")
        if (key === "user") {
            params.set(key, JSON.parse(value))
        } else {
            params.set(key, value)
        }
    })
    return params
}