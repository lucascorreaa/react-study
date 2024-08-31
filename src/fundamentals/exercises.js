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
