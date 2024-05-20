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
        for (const [key, value] of Object.entries(errors)) {
            Toastify({
                text: value,
                duration: 2000,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style:{
                    background: "#ec2828",
                }
            }).showToast();

        }
    } else {
        // form.submit();
        alert('Formulario enviado correctamente');
        form.reset();
    }
}

form.addEventListener('submit', submitForm);