const prompt = require("prompt-sync")()

const valorTotal = 500
// Number(prompt('Valor total da compra R$: '))          

let aux = Math.floor(valorTotal / 20)
const parcelas = aux == 0 ? 1 : aux > 6 ? 6 : aux

const valorDaParcela = valorTotal / parcelas

    console.log(`Pode pagar em ${parcelas}x de R$: ${valorDaParcela.toFixed(2)}`)


