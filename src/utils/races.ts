export type Race = {
    code: string,
    name: string
}

const races: Race[] = [
    { code: "human", name: "Человек" },
    { code: "walker", name: "Гуль"},
    { code: "supermutant", name: "Супермутант" },
    { code: "halfmutant", name: "Полумутант" },
    { code: "deathclow", name: "Коготь смерти" },
    { code: "animal", name: "Животное" },
    { code: "robot", name: "Робот" },
    { code: "sint", name: "Синт" },
    { code: "alien", name: "Инопланетянин" }
]

export default races