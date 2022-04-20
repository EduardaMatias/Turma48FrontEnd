let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')

let nomeEduarda = document.querySelector('#nomeEduarda');

let n = document.querySelector('#mapa');

let nomeOK = false;
let emailOK = false;
let assuntoOK = false;

function validaNome(){
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length <= 3){
        txtNome.innerHTML = 'Nome inválido'
        txtNome.style.color = '#F38B8A'
        nome.style.border = '2px solid #F38B8A'
        nome.style.color = '#F38B8A'
    } else {
        txtNome.innerHTML = 'Nome válido'
        txtNome.style.color = '#79CECB'
        nome.style.border = '2px solid #79CECB'
        nome.style.color = '#79CECB'
        nomeOK = true;
    }
}    

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'Email inválido'
        txtEmail.style.color = '#F38B8A'
        email.style.border = '2px solid #F38B8A'
        email.style.color = '#F38B8A'
    } else {
        txtEmail.innerHTML = 'Email válido'
        txtEmail.style.color = '#79CECB'
        email.style.border = '2px solid #79CECB'
        email.style.color = '#79CECB'
        emailOK = true;
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')

    if(assunto.value.length > 500){
        txtAssunto.innerHTML = 'Texto muito grande. Digite no máximo 500 caracteres.'
        txtAssunto.style.color = '#F38B8A'
        assunto.style.border = '2px solid #F38B8A'
        assunto.style.color = '#F38B8A'
    assuntoOK = false;
    } else if (assunto.value.length < 10){
        txtAssunto.innerHTML = 'Texto muito pequeno. Digite ao menos 10 caracteres.'
        txtAssunto.style.color = '#F38B8A'
        assunto.style.border = '2px solid #F38B8A'
        assunto.style.color = '#F38B8A'
        assuntoOK = false;
    } else {
        txtAssunto.innerHTML = 'Texto válido'
        txtAssunto.style.color = '#79CECB'
        assunto.style.border = '2px solid #79CECB'
        assunto.style.color = '#79CECB'
        assuntoOK = true;
    }
}

function enviar(){
    if(nomeOK == true && emailOK == true && assuntoOK == true){
        alert('Formulário enviado!')
    } else {
        alert('Preencha todos os campos corretamente.')
    }
}








