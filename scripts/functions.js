export function createCity(city) {
    let templatePlaces = '';
    city.places.forEach(place => {
        templatePlaces += createPlace(place);
    });
    return `
        <div class="floor">
            <div class="floor-title">
                <h2>${city.cityName}</h2>
            </div>
            <div class="rooms">
                ${templatePlaces}
            </div>
        </div>
    `
}
export function createPlace(place) {

    return `
        <div class="room">
            <div class="room-image">
                <img src="${place.imageSrc}" alt="${place.imageAlt}" />
            </div>
            <div class="room-info">
                <h3>${place.placeName}</h3>
                <p>${place.description}</p>
                <p>Precio: &dollar;${place.price} por noche</p>
                <a href="/pages/detail.html?placeId=${place.placeId}" class="btn">Reservar</a>
            </div>
        </div>
    `
}

export function createDetail(place) {

    return `
    <div class="details">
        <section class="detail-section">
            <i class="fa fa-map-marker" aria-hidden="true"></i>
            <div>
                <strong>Ubicación</strong>
                <span>${place.location}</span>
            </div>
        </section>
        <section class="detail-section">
            <i class="fa fa-calendar-o" aria-hidden="true"></i>
            <div>
                <strong>Check-in / Registro de entrada</strong>
                <span>dd/mm/yyyy</span>
            </div>
        </section>
        <section class="detail-section">
            <i class="fa fa-calendar-o" aria-hidden="true"></i>
            <div>
                <strong>Check-out / Registro de salida</strong>
                <span>dd/mm/yyyy</span>
            </div>
        </section>
        <section class="detail-section">
            <i class="fa fa-calendar-o" aria-hidden="true"></i>
            <div>
                <strong>Huéspedes</strong>
                <span>${place.guests}</span>
            </div>
        </section>
        <section class="detail-section">
            <i class="fa fa-users" aria-hidden="true"></i>
            <div id="button-book">Reservar ahora</div>
        </section>
    </div>

    `
}