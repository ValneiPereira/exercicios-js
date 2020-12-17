function getInteiroAleatorioEntre(min, max) {
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

let opcao = -1;
let cont = 0;
do {
  opcao = getInteiroAleatorioEntre(-1, 10)
  console.log(`Opção escolhida foi ${opcao}.`);
  cont++
} while (opcao != -1)
console.log('Até a próxima');
console.log(`Quantas vezes foi executada esta bagaça ${cont}.`);
