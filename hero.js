// import fetch from "node-fetch";

export async function fetchHeroes() {
    const response = await fetch(
        "https://akabab.github.io/superhero-api/api/all.json"
    );
    let heroes = await response.json();
    heroes = heroes.map((h) => h.name);
    return heroes;
}

export async function buildOptions() {
    const heroesNames = await fetchHeroes();
    const selects = document.querySelectorAll(".hero-name-options");
    selects.forEach((select) => {
        heroesNames.forEach((heroName) => {
            const optEl = document.createElement("option");
            optEl.innerText = heroName;
            optEl.setAttribute("value", heroName);
            select.appendChild(optEl);
        });
    });
}
