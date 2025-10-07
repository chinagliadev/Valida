function fnValidarNome() {
    const nome = document.getElementById('nome').value
    const nomeErro = document.getElementById('mensagem-erro-nome')

    if (nome === "") {
        setMensageError(nomeErro, "campo obrigatorio")
        document.getElementById("nome").focus()
    } else if (nome.length > 60) {
        setMensageError(nomeErro, "nome não pode ser maior que 60 caracteres !")
        document.getElementById("nomeErro").focus()
    } else if (nome.length < 5) {
        setMensageError(nomeErro, "nome não pode ser menor que 5 caracteres !")
        document.getElementById("nomeErro").focus()
    } else {
        nomeErro.textContent = "OK"
        nomeErro.style.color = "green"
        document.getElementById("nomeErro").focus()
    }

}

function fnVerificarEmail() {
    const email = document.getElementById('email').value
    const emailErro = document.getElementById('mensagem-erro-email')
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (email === "") {
        setMensageError(emailErro, "Campo obrigatorio")
        document.getElementById("email").focus()
    } else if (email.length > 100) {
        setMensageError(emailErro, "email não pode ser maior que 100 caracteres !")
        document.getElementById("email").focus()
    } else if (email.length < 20) {
        setMensageError(emailErro, "email não pode ser menor que 20 caracteres !")
        document.getElementById("email").focus()
    } else if (!emailPattern.test(email)) {
        setMensageError(emailErro, "email invalido ")
        document.getElementById("email").focus()
    } else {
        emailErro.textContent = "OK"
        emailErro.style.color = "green"
    }
}

function fnvalidarCidade() {
    const cidade = document.getElementById('cidade').value
    const spanError = document.getElementById('mensagem-cidade')

    if (cidade === "") {
        setMensageError(spanError, "Campo Obrigatório")
    } else if (cidade.length < 3) {
        setMensageError(spanError, "Cidade de ter no minimo 3 caracteres")
    } else if (cidade.length > 60) {
        setMensageError(spanError, "Cidade de ter no máximo 60 caracteres")
    } else {
        spanError.textContent = "OK"
        spanError.style.color = "green"
    }
}

function fnValidarEstado() {
    const estado = document.getElementById('estado').value
    const messagemEstado = document.getElementById('mensagem-estado')

    if (estado === "") {
        setMensageError(messagemEstado, "Campo Obrigatório")
    } else if (estado.length != 2) {
        setMensageError(messagemEstado, "estado deve ter 2 caracteres")
    } else {
        spanError.textContent = "OK"
        spanError.style.color = "green"
    }
}

function fnValidarSenha() {
    const senha = document.getElementById("senha").value;
    const senhaError = document.getElementById("erro-senha");
    const regexMaiusculo = /[A-Z]/;
    const regexEspecial = /[!@#$%^&(),.?{}|<>]/;
    const regexNumero = /\d/;

    if (senha === "") {
        setMensageError(senhaError, "Senha não pode ser vazia!");
    } else if (senha.length < 8) {
        setMensageError(senhaError, "Senha deve ter no mínimo 8 caracteres!");
    } else if (senha.length > 60) {
        setMensageError(senhaError, "Senha deve ter no máximo 60 caracteres!");
    } else if (!regexMaiusculo.test(senha)) {
        setMensageError(senhaError, "A senha deve conter pelo menos uma letra maiúscula!");
    } else if (!regexEspecial.test(senha)) {
        setMensageError(senhaError, "A senha deve conter pelo menos um caractere especial!");
    } else if (!regexNumero.test(senha)) {
        setMensageError(senhaError, "A senha deve conter pelo menos um número!");
    } else {
        senhaError.textContent = "OK";
        senhaError.style.color = "green";
    }

}

function fnValidarConfirmarSenha() {
    const confirmarSenha = document.getElementById("confirmar_senha").value
    const senha = document.getElementById("senha").value;
    const spanError = document.getElementById("mensagem-erro-confirmar-senha")
    if (senha === confirmarSenha) {
        spanError.textContent = "OK";
        spanError.style.color = "green";
    } else {
        setMensageError(spanError, "As senhas não batem, tente novamente")
    document.getElementById("confirmar_senha").focus()
    }
}

function fnValidarTelefone(){
    const telefone = document.getElementById("telefone").value
    const spanError = document.getElementById("mensagem-erro-telefone")

    const regexNumero = /\d/

    if(telefone === ""){
        setMensageError(spanError, "Campo obrigatorio")
        document.getElementById("telefone").focus()
    }else if (telefone.length < 15){
        setMensageError(spanError, "Telefone deve conter 14 caracteres")
    }else if(!telefone.test(regexNumero)){
        setMensageError(spanError, "Telefone tem que cadastrar numero")
    }else{
        spanError.textContent = "OK";
        spanError.style.color = "green";
    }
}

function setMensageError(span, mensagem) {
    span.textContent = `${mensagem}`;
    span.style.color = "red"
}