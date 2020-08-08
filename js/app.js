const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.querySelector('.btn');
const btnReset = document.getElementById('resetBtn');

eventListener();

function eventListener(){
    //Deshabilitar el boton de enviar
    document.addEventListener('DOMContentLoaded', inicioApp)

    //Validamos los campos email, asunto, mensaje
    email.addEventListener('blur',validacion);
    asunto.addEventListener('blur',validacion);
    mensaje.addEventListener('blur',validacion);
    btnEnviar.addEventListener('click',enviarMensaje);
}



function inicioApp(){
    btnEnviar.disabled  = true
}

function validacion(){
    //El apuntador this,
    validarCampo(this);
    if(email.value != '' && asunto.value != '' && mensaje.value != ''){
        btnEnviar.disabled = false;
    }
    else{
        btnEnviar.disabled =true;
    }
}

function validarCampo(campo){

    if(campo.type == 'text'){
        if(campo.value == ''){
            campo.style.borderBottomColor = 'red';
            campo.classList.add('error');
        }
        else{
            campo.style.borderBottomColor = 'green';
            campo.classList.remove('error');
            
        }
    }
    
    if (campo.type== 'email'){
        if(campo.value == '' || campo.value.includes('@') == false){
            campo.style.borderBottomColor = 'red';
            campo.classList.add('error');
        }
        else{
            campo.style.borderBottomColor = 'green';
            campo.classList.remove('error');
        }
    }

    if(campo.type == 'textarea'){
        if(campo.value == ''){
            campo.style.borderBottomColor = 'red';
            campo.classList.add('error');
        }
        else{
            campo.style.borderBottomColor = 'green';
            campo.classList.remove('error');
        }
    }
}

function enviarMensaje(e){
    e.preventDefault();
    let imagen = document.querySelector('#spinner');
    imagen.style.display = 'block';
    setTimeout(()=>{
        imagen.src = 'img/mail.gif';
        setTimeout(()=>{
            imagen.style.display = 'none';
            const formulario  = document.querySelector('#enviar-mail');
            formulario.reset();
        },3000);
    },2500);
    
}