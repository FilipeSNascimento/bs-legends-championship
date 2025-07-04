document.addEventListener('DOMContentLoaded', () => {

  function aplicarClasseCampo(campo, valido) {
    if (!campo) return; // se não existir, não faz nada
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
    if (nome) aplicarClasseCampo(nome, nome.value.trim().length >= 2);
  }

  function validarCampoSobrenome() {
    const sobrenome = document.getElementById('sobrenome');
    if (sobrenome) aplicarClasseCampo(sobrenome, sobrenome.value.trim().length >= 2);
  }

  function validarCampoEmail() {
    const email = document.getElementById('email');
    if (email) aplicarClasseCampo(email, email.checkValidity());
  }

  function senhaForte(senha) {
    const regex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
    return regex.test(senha);
  }

  function validarCampoSenha() {
    const senha = document.getElementById('senha');
    if (senha) aplicarClasseCampo(senha, senhaForte(senha.value));
  }

  function validarConfirmacaoSenha() {
    const senha = document.getElementById('senha');
    const confirmar = document.getElementById('confirmarSenha');
    const erroSenha = document.getElementById('erroSenha');

    if (senha && confirmar && erroSenha) {
      const valido = senha.value === confirmar.value && confirmar.value !== '';
      aplicarClasseCampo(confirmar, valido);

      if (!valido) {
        erroSenha.classList.remove('d-none');
      } else {
        erroSenha.classList.add('d-none');
      }
    }
  }

  // Ouvintes em tempo real - só adiciona se o elemento existir
  const nome = document.getElementById('nome');
  if (nome) nome.addEventListener('input', validarCampoNome);

  const sobrenome = document.getElementById('sobrenome');
  if (sobrenome) sobrenome.addEventListener('input', validarCampoSobrenome);

  const email = document.getElementById('email');
  if (email) email.addEventListener('input', validarCampoEmail);

  const senha = document.getElementById('senha');
  if (senha) senha.addEventListener('input', validarCampoSenha);

  const confirmarSenha = document.getElementById('confirmarSenha');
  if (confirmarSenha) confirmarSenha.addEventListener('input', validarConfirmacaoSenha);

  const form = document.getElementById('cadastroForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      validarCampoNome();
      validarCampoSobrenome();
      validarCampoEmail();
      validarCampoSenha();
      validarConfirmacaoSenha();

      // Busca os elementos novamente para garantir que existem
      const nome = document.getElementById('nome');
      const sobrenome = document.getElementById('sobrenome');
      const email = document.getElementById('email');
      const senha = document.getElementById('senha');
      const confirmarSenha = document.getElementById('confirmarSenha');
      const sucesso = document.getElementById('mensagemSucesso');

      const valido =
        nome && sobrenome && email && senha && confirmarSenha && sucesso &&
        nome.value.trim().length >= 2 &&
        sobrenome.value.trim().length >= 2 &&
        email.checkValidity() &&
        senhaForte(senha.value) &&
        senha.value === confirmarSenha.value;

      if (!valido) {
        e.preventDefault(); // Impede o envio se inválido
        sucesso.classList.add('d-none');
      } else {
        sucesso.classList.remove('d-none');
        setTimeout(() => sucesso.classList.add('d-none'), 5000);
      }
    });
  }
});
