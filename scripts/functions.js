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
                <a href="/CaC-TPO-Front-Python/pages/detail.html?placeId=${place.placeId}" class="btn">Reservar</a>
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

export function validateForm(formData) {

    let errors = {};

    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;

    let regexEmail = /^\w+([.-_+]?\w+)@\w+([.-]?\w+)(\.\w{2,10})+$/;

    let regexMessageText = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü0-9\s]+$/;

    if (!regexName.test(formData.get('nombre'))) {
        errors.name = 'El nombre solo puede contener letras y espacios';
    }
    if (!regexEmail.test(formData.get('email'))) {
        errors.email = 'El email no es valido';
    }
    
    if (!regexMessageText.test(formData.get('mensaje'))) {
        errors.message = 'El mensaje solo puede contener letras, numeros y espacios';
    }

    if (formData.get('nombre') === '') {
        errors.name = 'El nombre es obligatorio';
    }
    if (formData.get('email') === '') {
        errors.email = 'El email es obligatorio';
    }

    if (formData.get('mensaje') === '') {
        errors.message = 'El mensaje es obligatorio';
    }

    return errors;

}
