//par nomeValor
const saudacao = 'Opa' //contexto lexico 1

function exec() {
  const saudacao = 'Falaa' //contexto lexico 2
  return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
  nome: 'Pedro',
  idade: 32,
  peso: 90,
  endenreco: {
    logradouro: 'Rua Muito legal',
    numero: 123
  } 
}

console.log(saudacao);
console.log(exec());
console.log(cliente);