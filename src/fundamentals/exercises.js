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

function diaDaSemana(dia) {
   switch (dia) {
    case 1: return console.log("Domingo")
    case 2: return console.log("Segunda")
    case 3: return console.log("Terça")
    case 4: return console.log("Quarta")
    case 5: return console.log("Quinta")
    case 6: return console.log("Sexta")
    case 7: return console.log("Sábado")
    default: return console.log("Dia inválido")
   }
}
// diaDaSemana(0)

function handleMonth(mes) {
  switch (mes) {
    case 1: return console.log('Jan')
    case 2: return console.log('Fev')
    case 3: return console.log('Mar')
    case 4: return console.log('Abr')
    case 5: return console.log('Mai')
    case 6: return console.log('Jun')
    case 7: return console.log('Jul')
    case 8: return console.log('Agost')
    case 9: return console.log('Set')
    case 10: return console.log('Out')
    case 11: return console.log('Nov')
    case 12: return console.log('Dec')
    default: return console.log('Mês inválido')
  }
}
// handleMonth(30)

function handleDev(cargo) {
  switch (cargo) {
    case 'inciante': return console.log('Vai estudar!')
    case 'intermediario': return console.log('Vai estudar o foco das vagas!')
    case 'avancado': return console.log('Vai aprimorar o conhecimento!')
    default: return console.log('Cargo inexistente')
  }
}
// handleDev('a')