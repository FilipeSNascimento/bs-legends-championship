 // Validador de CPF
function validarCPF(cpf) {
  cpf = cpf.replace(/[^\d]+/g, '');
  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;

  let soma = 0, resto;

  for (let i = 1; i <= 9; i++) {
    soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
  }
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.substring(9, 10))) return false;

  soma = 0;
  for (let i = 1; i <= 10; i++) {
    soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
  }
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.substring(10, 11))) return false;

  return true;
}
  
  // Verifica se o campo é válido
function aplicarClasseCampo(campo, valido) {
  if (valido) {
    campo.classList.add('is-valid');
    campo.classList.remove('is-invalid');
  } else {
    campo.classList.add('is-invalid');
    campo.classList.remove('is-valid');
  }
}
  
function validarCampoNome() {
  const nome = document.getElementById('nome');
  aplicarClasseCampo(nome, nome.value.trim().length >= 3);
}

function validarCampoEmail() {
  const email = document.getElementById('email');
  aplicarClasseCampo(email, email.checkValidity());
}

function validarCampoCPF() {
  const cpf = document.getElementById('cpf');
  aplicarClasseCampo(cpf, validarCPF(cpf.value));
}

function validarCampoAssunto() {
  const assunto = document.getElementById('assunto');
  aplicarClasseCampo(assunto, !!assunto.value);
}

function validarCampoMensagem() {
  const mensagem = document.getElementById('mensagem');
  aplicarClasseCampo(mensagem, mensagem.value.trim().length >= 10);
}
  
// Ouvintes em tempo real
document.getElementById('nome').addEventListener('input', validarCampoNome);
document.getElementById('email').addEventListener('input', validarCampoEmail);
document.getElementById('cpf').addEventListener('input', validarCampoCPF);
document.getElementById('assunto').addEventListener('change', validarCampoAssunto);
document.getElementById('mensagem').addEventListener('input', validarCampoMensagem);
  
// Envio do formulário
document.getElementById('contatoForm').addEventListener('submit', function (e) {
  e.preventDefault();

const nome = document.getElementById('nome');
const email = document.getElementById('email');
const cpf = document.getElementById('cpf');
const assunto = document.getElementById('assunto');
const mensagem = document.getElementById('mensagem');
const sucesso = document.getElementById('mensagemSucesso');
  
  const valido =
    nome.value.trim().length >= 3 &&
    email.checkValidity() &&
    validarCPF(cpf.value) &&
    assunto.value &&
    mensagem.value.trim().length >= 10;

  if (valido) {
    sucesso.classList.remove('d-none');
    this.reset();
  
      // Remove classes de validação após reset
      [nome, email, cpf, assunto, mensagem].forEach(campo => {
        campo.classList.remove('is-valid', 'is-invalid');
      });
  
      setTimeout(() => {
        sucesso.classList.add('d-none');
      }, 6000);
    } else {
      sucesso.classList.add('d-none');
      // Garante que os campos sejam validados ao clicar em Enviar
      validarCampoNome();
      validarCampoEmail();
      validarCampoCPF();
      validarCampoAssunto();
      validarCampoMensagem();
    }
  });
  