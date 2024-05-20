import { validateForm } from './functions.js';
let form = document.getElementById('formulario');

function submitForm(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const errors = validateForm(formData);
    console.log(errors);
    if (Object.keys(errors).length > 0) {
        // alert('Por favor, complete correctamente los campos: ' + Object.keys(errors).join(', ') + '.');
    } else {
        // form.submit();
        alert('Formulario enviado correctamente');
        form.reset();
    }
}

form.addEventListener('submit', submitForm);