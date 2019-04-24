// function hasElevenNumbers(cpfNumber){
//   if(cpfNumber.length === 11){
//     //No lugar de true vai executar outra função
//     return true;
//   }
// }
// console.log(hasElevenNumbers("40084948809"))
// //Beleza, até aqui recebo a string com 11 números e valido se contém 11 números

const cpfNumber = 400849488;

const convertedCpf = cpfNumber.toString().split('').map(Number)

const multiplication = []

for (let multiplier = 10; multiplier >=2; multiplier--) {
    multiplication.push(convertedCpf[0] * multiplier)
    convertedCpf.shift();
  }

const arrSum = () =>
multiplication.reduce(function(a, b) {
  return a + b;
}, 0);

const resultado = arrSum() / 11

const precision = (resultado + "").split(".")[1];
const meuArray = [];
meuArray.push(precision[0])
numero = Number(meuArray)

if(numero === 0 || numero ===1){
  console.log(true)
} else{
  console.log(false)
}