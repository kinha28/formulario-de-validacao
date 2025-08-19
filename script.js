const form = document.getElementById("formulario");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Impede envio automático
  validarCampos();
});

function validarCampos() {
  let valido = true;

  // Nome
  if (nome.value.trim() === "") {
    setErro(nome, "O nome é obrigatório");
    valido = false;
  } else {
    setSucesso(nome);
  }

  // Email
  if (email.value.trim() === "") {
    setErro(email, "O email é obrigatório");
    valido = false;
  } else if (!validarEmail(email.value)) {
    setErro(email, "Digite um email válido");
    valido = false;
  } else {
    setSucesso(email);
  }

  // Mensagem
  if (mensagem.value.trim() === "") {
    setErro(mensagem, "A mensagem é obrigatória");
    valido = false;
  } else {
    setSucesso(mensagem);
  }

  if (valido) {
    alert("Formulário enviado com sucesso!");
    form.reset();
  }
}

function setErro(input, mensagem) {
  const campo = input.parentElement;
  const erro = campo.querySelector(".erro");
  erro.innerText = mensagem;
  input.style.borderColor = "red";
}

function setSucesso(input) {
  const campo = input.parentElement;
  const erro = campo.querySelector(".erro");
  erro.innerText = "";
  input.style.borderColor = "green";
}

function validarEmail(email) {
  // Regex simples para validar email
  return /\S+@\S+\.\S+/.test(email);
}
