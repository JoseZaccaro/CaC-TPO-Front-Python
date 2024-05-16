import { createCity } from "./functions.js";
const $container = document.getElementById('cities-container')

fetch('./scripts/dataReservas.json')
    .then(response => response.json())
    .then(data => {
        // console.log(data);
        const cities = data.cities;
        // const reservations = []
        cities.forEach(city => {
            const cityHTML = createCity(city);
            $container.innerHTML += cityHTML
        })

    })