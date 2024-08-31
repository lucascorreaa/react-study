function validaIdade(idade) {
 return ( idade >= 18 
  ? 
  console.log("pode comprar") 
  : 
  console.log("não pode comprar"))
}
// validaIdade(20)

const age = 20
const message = age >= 18 
? 
"Você é maior de idade" 
: 
"Você é menor de idade"
// console.log(message)

function validaParidade(numero) {
  return (
    numero % 2 === 0 
    ? 
    console.log('Esse número é Par') 
    : 
    console.log('Esse número não é par')
  )
}
// validaParidade(4)

function validaFidelidade(clienteFidelidade) {
  return(
    clienteFidelidade === true
    ?
    console.log('Desconto de 10%')
    :
    console.log('Cliente novo apenas 5%')
  )
}
// validaFidelidade(true)

function validaIdadeIf(idade) {
  if (idade >= 18) {
    return console.log("É maior de idade")
  } else {
    return console.log("É menor de idade")
  }
}
// validaIdadeIf(19)

function validaMedia(nota) {
  if (nota >= 7) {
    return console.log('Aprovado')
  } else if (nota >= 5 && nota <= 6) {
    return console.log('Está de recuperação')
  } else {
    return console.log('reprovado')
  }
}
// validaMedia(9)

function validaNota(nota) {
  if (nota >= 60) {
    return console.log("aprovado")
  } else {
    return console.log("reprovado")
  }
}
// validaNota(3)

function verificaValor(valor) {
  if (valor > 0) {
    return console.log('positivo')
  } else if (valor < 0) {
    return console.log('negativo') 
  } else {
    return console.log('zero')
  }
}
// verificaValor(10)
// verificaValor(-20)
// verificaValor(0)