const enviarForm = (e) => {
    e.preventDefault();
    console.log('Estoy enviandome!')
    let inputname = document.querySelector("#name");
    if(inputname.value.length == 0)  {
        alert('No completaste el Nombre');
        return false;
    }
    let inputapellido = document.querySelector("#apellido");
    if(inputapellido.value.length == 0) {
        alert('Ausencia del apellido');
        return false;
    }
    let inputemail = document.querySelector("#mail");
    if(inputemail.value.length == 0) {
        alert('Falta tu email...');
        return false;
    }
    let inputmensaje = document.querySelector("#mensaje");
    if(inputmensaje.value.length == 0) {
        alert('Creemos que has olvidado tu Consulta 😉...');
        return false;
    }
}