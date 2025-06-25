AOS.init({
  once: true,
  duration: 800,
  offset: 50,
});

const modal = document.getElementById("container-modal");
const formulario = document.getElementById("formulario");
const botaoEnviar = document.getElementById("enviar-form");
const fecharBtn = document.getElementById("fechar-form");
const abrirGmailBtn = document.getElementById("abir-gmail");
const nomeModal = document.getElementById("nome-modal");
const emailModal = document.getElementById("email-modal");

formulario.addEventListener("input", () => {
  botaoEnviar.disabled = !formulario.checkValidity();
});

function fecharModal() {
  modal.style.display = "none";
}

function abrirGmail() {
  window.open("https://mail.google.com/mail", "_blank");
}

formulario.addEventListener("submit", function (e) {
  e.preventDefault();
  const nomeDigitado = document.getElementById("nome").value;
  const emailDigitado = document.getElementById("email").value;
  nomeModal.textContent = nomeDigitado;
  emailModal.textContent = emailDigitado;
  modal.style.display = "flex";
});

fecharBtn.addEventListener("click", fecharModal);
abrirGmailBtn.addEventListener("click", abrirGmail);
