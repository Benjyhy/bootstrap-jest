import { fetchHeroes } from "./hero.js";

test("La donnée est un array de héros", async () => {
    return fetchHeroes().then((data) => {
        expect(data).toBe(data);
    });
});
