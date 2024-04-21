import { createDetail } from "./functions.js";

const placeId = new URLSearchParams(window.location.search).get('placeId')
const $container = document.getElementById('container')
fetch('/scripts/dataReservas.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const cities = data.cities;
        // const reservations = []
        if (!placeId) {
            return
        }

        let place = cities.map(city => city.places).flat().find(place => place.placeId == placeId)
        if (!place) {
            return
        }

        const placeHTML = createDetail(place);
        const $banner = $container.parentElement.querySelector('div')
        $banner.querySelector('h1').textContent = place.placeName
        $banner.querySelector('h1').innerHTML += `<div class="chevron"></div>`
        $banner.style.backgroundImage = `url(${place.imageSrc})`
        $banner.classList.remove('developing')
        $banner.classList.add('banner')

        $container.parentElement.querySelector('p')
        $container.innerHTML = placeHTML
    })
