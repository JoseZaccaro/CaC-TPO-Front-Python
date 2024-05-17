import { createRoomType } from "./functions.js";
const $container = document.getElementById('habitaciones-container')

fetch('/scripts/dataHabitacion.json')
    .then(response => response.json())
    .then(data => {
        const cities = data.cities;
        cities.forEach(city => {
            const cityHTML = createRoomType(city);
            $container.innerHTML += cityHTML
        })

    })