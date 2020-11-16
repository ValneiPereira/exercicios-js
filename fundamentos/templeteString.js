const nome = 'Rebeca'
const concatenacao = 'Ola ' + nome + '!'
console.log(concatenacao);

const templete = `
Olá
${nome} !`
console.log(templete);

//expressoes
console.log(`1+1 = ${1+1}`);

const up = texto => texto.toUpperCase()
console.log(`Ei...${up('cuidado')}!`);
