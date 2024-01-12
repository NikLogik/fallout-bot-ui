import { describe, expect, test } from "vitest";
import readInitData from "./readInitData";

describe('read initData', () => {

    test('parse initData successfully', () => {
        const queryString = "query_id=AAGQyOlcAAAAAJDI6Vzumtru&user=%7B%22id%22%3A1558825104%2C%22first_name%22%3A%22%D0%9D%D0%B8%D0%BA%D0%B8%D1%82%D0%B0%22%2C%22last_name%22%3A%22%D0%90%D0%BD%D1%82%D0%BE%D0%BD%D0%BE%D0%B2%22%2C%22username%22%3A%22NikLogik%22%2C%22language_code%22%3A%22ru%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1703840072&hash=b4a22dfe8dd9e60f568665113b7d14fdb948c7f9f75effbdf5943f7786cf78d4"
        
        const expected = new Map<string, unknown>()
        expected.set("query_id", "AAGQyOlcAAAAAJDI6Vzumtru")
        expected.set("auth_date", "1703840072")
        expected.set("hash", "b4a22dfe8dd9e60f568665113b7d14fdb948c7f9f75effbdf5943f7786cf78d4")
        expected.set("user", {
                allows_write_to_pm: true,
                first_name: "Никита",
                id: 1558825104,
                language_code: "ru",
                last_name: "Антонов",
                username: "NikLogik",
            })

        expect(readInitData(queryString)).toStrictEqual(expected)
    })
})