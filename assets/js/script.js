/*** única imagen ***/
let img_unica = document.getElementById('img_unica');

function border() {
    img_unica.classList.toggle('con-border');
}

/*** stickers ***/
let total = 0;

sticker1 = document.querySelector(".st-1");
sticker2 = document.querySelector(".st-2");
sticker3 = document.querySelector(".st-3");

mensaje = document.querySelector(".msg");

function verificar() {
    total = parseInt(sticker1.value) + parseInt(sticker2.value) + parseInt(sticker3.value);
    
    if(total > 0 && total <= 10) {
        mensaje.innerHTML = "Llevas " + total + " stickers";
    } else if (total > 10) {
        mensaje.innerHTML = "Llevas demasiados stickers";
    } else {
        mensaje.innerHTML = "";
    }
}

/*** Password ***/
let password = '';

num1 = document.querySelector(".num-1");
num2 = document.querySelector(".num-2");
num3 = document.querySelector(".num-3");

msgPassword = document.querySelector(".msg-password");

function ingresar() {
    password = num1.value + num2.value + num3.value;

    if(password === '911') {
        msgPassword.innerHTML = "Password 1 correcto";
    } else if(password === '714') {
        msgPassword.innerHTML = "Password 2 correcto";
    } else {
        msgPassword.innerHTML = "Password incorrecto";
    }
}