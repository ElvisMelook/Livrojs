
const numero = 473

if(numero < 100 || numero >= 1000){
    console.log(`O número deve ser uma centena!`)
    return
}

const num1 = Math.floor(numero / 100)

const sobra = numero % 100 
const num2 = Math.floor(sobra / 10)
const num3 = sobra % 10

console.log(`Invertido: ${num3}${num2}${num1}`)
