// Caso o email seja "tryber@teste.com" e a senha seja "123456" será emitido um alerta contendo o texto "Olá, Tryber!";
// Em todos os outro casos deverá ser emitido um alerta contendo o texto "Email ou senha inválidos.";
// Email ou senha inválidos, no caso de erro de preenchimento dos dados;
// Ao clicar no botão de login dispara um alert com o texto Olá, Tryber!, no caso de preenchimento correto dos dados.
const senhaDefinida = '123456';
const emailDefinido = 'tryber@teste.com';
const senha = document.getElementById('password');
const email = document.getElementById('email');
const botaoEntrar = document.getElementsByClassName('entrar');

function entrar() {
  if (email === emailDefinido && senha === senhaDefinida) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

botaoEntrar.addEventListener('click', entrar);
