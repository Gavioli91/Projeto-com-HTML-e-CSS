// Caso o email seja "tryber@teste.com" e a senha seja "123456" será emitido um alerta contendo o texto "Olá, Tryber!";
// Em todos os outro casos deverá ser emitido um alerta contendo o texto "Email ou senha inválidos.";
// Email ou senha inválidos, no caso de erro de preenchimento dos dados;
// Ao clicar no botão de login dispara um alert com o texto Olá, Tryber!, no caso de preenchimento correto dos dados.
const senhaDefinida = '123456';
const emailDefinido = 'tryber@teste.com';
const senha = document.getElementById('password');
const email = document.getElementById('email');
const botaoEntrar = document.querySelector('.entrar');
console.log(botaoEntrar);

function entrar() {
  if (email.value === emailDefinido && senha.value === senhaDefinida) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

botaoEntrar.addEventListener('click', entrar);

// Requisito 18
const botaoEnviar = document.getElementById('submit-btn');
botaoEnviar.disabled = true;
const agreement = document.querySelector('#agreement');

agreement.addEventListener('input', () => {
  const valor = agreement.value;

  if (valor !== null && valor !== '') {
    botaoEnviar.disabled = false;
  } else {
    botaoEnviar.disabled = true;
  }
});
