const valorConta = 100;
const percentGorjeta = 15;

const valorGorjeta = valorConta * (percentGorjeta / 100);
const valorTotal = valorConta + valorGorjeta;

console.log(`Valor da Conta: R$${valorConta.toFixed(2)}, gorjeta (${percentGorjeta}%): R$${valorGorjeta.toFixed(2)}, TOTAL A PAGAR: R$${valorTotal.toFixed(2)}`);