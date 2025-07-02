const express = require('express');
const app = express();

app.use(express.static('public'));

//Rota raiz
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
<html lang="pt">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>BS Legends Championship</title>
  <link rel="icon" type="image/x-icon" href="Imagens/favicon.ico" />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="/BS_Legends.css" />
</head>
<body>
  <!-- Cabeçalho -->
  <header class="bg-dark fixed-top shadow-sm">
    <div class="container-fluid">
      <!-- Logo + Título -->
      <div class="row align-items-center py-2">
        <div class="col-auto">
          <a class="navbar-brand" href="#">
            <img src="Imagens/LogoBSLegends.png" alt="Logo" class="img-fluid" style="max-height: 60px;" />
          </a>
        </div>
        <div class="col text-center">
          <h5 class="m-0 titulo-contornado fs-4 fs-md-2 text-white">BS LEGENDS CHAMPIONSHIP</h5>
        </div>
      </div>
  
      <!-- Navbar -->
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark py-2">
        <div class="container justify-content-center">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                  aria-controls="navbarNav" aria-expanded="false" aria-label="Alternar navegação">
            <span class="navbar-toggler-icon"></span>
          </button>
  
          <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link text-white" href="#">HOME</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#form-login">LOGIN</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">COMO JOGAR?</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">PERGUNTAS FREQUENTES</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink" role="button"
                   data-bs-toggle="dropdown" aria-expanded="false">
                  FALE CONOSCO
                </a>
                <div class="dropdown-menu bg-dark" aria-labelledby="navbarDropdownMenuLink">
                  <a class="dropdown-item instagram text-white" href="#">INSTAGRAM</a>
                  <a class="dropdown-item discord text-white" href="#">DISCORD</a>
                  <a class="dropdown-item email text-white" href="#">EMAIL</a>
                  <a class="dropdown-item form text-white" href="/formulario">FORMULÁRIO</a>
                </div>                                    
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
  
  <!-- Conteúdo -->
  <main class="container py-5" style="padding-top: 180px;">
    <section class="row justify-content-center align-items-start g-5">
      <!-- Descrição -->
      <div class="col-lg-6 col-md-10 text-center text-white descricao-campeonato">
        <h2 class="mb-4 titulo-contornado">Bem-vindo ao Brawl Stars Legends Championship!</h2>
        <p>
          O <strong>BS Legends Championship</strong> é um campeonato feito de jogadores para jogadores. Aqui, a comunidade se une para transformar o que antes era apenas diversão em algo <strong>épico </strong>e <strong>recompensador</strong>. Se você é apaixonado por <strong>Brawl Stars</strong> e quer mostrar tudo o que sabe, <strong>esse é o seu lugar!</strong>
        </p>
        
        <p>
          Nosso objetivo é valorizar os <strong>talentos</strong> da comunidade, oferecendo uma competição séria, divertida e com <strong>premiações em dinheiro</strong>. Seja você um veterano ou alguém que está começando agora, aqui todos têm a chance de <strong>brilhar!</strong>
        </p>
        
        <p>
          Mostre sua <strong>habilidade</strong>, monte sua equipe e dispute partidas emocionantes com jogadores de todo o <strong>Brasil</strong>. Este é mais do que um torneio: é uma chance de <strong>crescer, competir e se destacar.</strong>
        </p>
        
        <p>
          <strong>Cadastre-se agora, entre para o campeonato e torne-se uma lenda do Brawl Stars!</strong>
        </p>        
      </div>
      <!-- Login -->
      <div class="col-lg-4 col-md-8" id="form-login">
        <div class="text-center login-box p-4 rounded-4 shadow" style="background-color: #0b1e3c; border: 2px solid #fff;">
          <form class="form-signin" onsubmit="return validarLogin(event)">
            <img class="mb-4" src="Imagens/LogoBSLegends.png" alt="Logo BS Legends" width="150" height="150" />
            <h1 class="login-title">Faça login</h1>
            <div class="form-group mb-3">
              <input type="email" id="inputEmail" class="form-control" placeholder="Seu email" required autofocus />
            </div>
            <div class="form-group mb-3">
              <input type="password" id="inputPassword" class="form-control" placeholder="Senha" required />
            </div>
            <div class="form-check mb-3 text-start">
              <input class="form-check-input" type="checkbox" id="rememberMe" />
              <label class="form-check-label" for="rememberMe">Lembrar de mim</label>
            </div>
            <button class="btn btn-primary w-100 btn-lg login-button" type="submit">LOGIN</button>
          </form>
        </div>
      </div>
    </section>
  </main>
  <!-- Rodapé -->
  <footer class="text-center text-muted mt-5">
    <p>&copy; 2025</p>
  </footer>
  <!-- JS -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
  <!-- Validar Login -->
  <script>
    function validarLogin(event) {
      event.preventDefault();
      const email = document.getElementById("inputEmail").value;
      const senha = document.getElementById("inputPassword").value;

      if (email === "teste@teste" && senha === "teste") {
        alert("Login bem-sucedido!");
      } else {
        alert("Usuário ou senha incorretos.");
      }
    }
  </script>
</body>
</html>
    `);
});

//Rota /formulário
app.get('/formulario', (req, res) => {
    res.send(`
<!DOCTYPE html>
<html lang="pt">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>BS Legends Championship</title>
  <link rel="icon" type="image/x-icon" href="Imagens/favicon.ico" />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="/BS_Legends.css" />
</head>
<body class="formulario-body">
  <!-- Cabeçalho -->
  <header class="bg-dark fixed-top shadow-sm">
    <div class="container-fluid">
      <!-- Logo + Título -->
      <div class="row align-items-center py-2">
        <div class="col-auto">
          <a class="navbar-brand" href="#">
            <img src="/Imagens/LogoBSLegends.png" alt="Logo" class="img-fluid" style="max-height: 60px;" />
          </a>
        </div>
        <div class="col text-center">
          <h5 class="m-0 titulo-contornado fs-4 fs-md-2 text-white">BS LEGENDS CHAMPIONSHIP</h5>
        </div>
      </div>
  
      <!-- Navbar -->
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark py-2">
        <div class="container justify-content-center">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                  aria-controls="navbarNav" aria-expanded="false" aria-label="Alternar navegação">
            <span class="navbar-toggler-icon"></span>
          </button>
  
          <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link text-white" href="/BS_Legends">HOME</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="/bs_legends#form-login">LOGIN</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">COMO JOGAR?</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">PERGUNTAS FREQUENTES</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink" role="button"
                   data-bs-toggle="dropdown" aria-expanded="false">
                  FALE CONOSCO
                </a>
                <div class="dropdown-menu bg-dark" aria-labelledby="navbarDropdownMenuLink">
                  <a class="dropdown-item instagram text-white" href="#">INSTAGRAM</a>
                  <a class="dropdown-item discord text-white" href="#">DISCORD</a>
                  <a class="dropdown-item email text-white" href="#">EMAIL</a>
                  <a class="dropdown-item form text-white" href="#">FORMULÁRIO</a>
                </div>                                    
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
  
  <!-- Formulário -->
   <main class="container py-5" style="padding-top: 180px;">
    <section class="row justify-content-center align-items-start g-5">
        <div class="col-lg-8">
            <section class="formulario-section text-white p-4 rounded shadow-lg">
                <h2 class="text-center mb-4">Entre em Contato</h2>
                <form id="contatoForm" novalidate>
                <div class="mb-3">
                    <label for="nome" class="form-label">Nome Completo</label>
                    <input type="text" class="form-control" id="nome" required minlength="3">
                </div>
            
               <div class="mb-3">
                    <label for="email" class="form-label">E-mail</label>
                    <input type="email" class="form-control" id="email" required>
                </div>
            
                <div class="mb-3">
                    <label for="cpf" class="form-label">CPF</label>
                    <input type="text" class="form-control" id="cpf" required>
                    <small class="form-text text-light">Para garantir a autenticidade dos formulários.</small>
                </div>
            
                <div class="mb-3">
                    <label for="assunto" class="form-label">Assunto</label>
                    <select class="form-select" id="assunto" required>
                    <option value="">Selecione...</option>
                    <option value="duvida">Dúvida</option>
                    <option value="sugestao">Sugestão</option>
                    <option value="parceria">Parceria</option>
                    <option value="outro">Outro</option>
                    </select>
                </div>
            
                <div class="mb-3">
                    <label for="mensagem" class="form-label">Mensagem</label>
                    <textarea class="form-control" id="mensagem" rows="4" required minlength="10"></textarea>
                </div>
            
                <div class="text-center">
                    <button type="submit" class="btn btn-warning fw-bold px-4">Enviar</button>
                </div>
                
                <div id="mensagemSucesso" class="alert alert-success mt-4 d-none text-center" role="alert">
                    🎉 Sua mensagem foi enviada com sucesso! Entraremos em contato em breve.
                </div>
                </form>
            </section>
        </div>
    </section>
  </main>
  <!-- Rodapé -->
  <footer class="text-center text-muted mt-5">
    <p>&copy; 2025</p>
  </footer>
  <!-- JS -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
  <script src="/formulario.js"></script>
</body>
</html>
    `);
});

//Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});