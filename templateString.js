// Template string é uma funcionalidade que está disponível a partir da versão 2015 do javascript

const nome = 'Vinicius'
const concatenacao = 'Olá, ' + nome + '!'

/* Ao se utilizar o símbolo `` na declaração de uma variável do tipo string, 
 * as quebras de linha e espaços passam a ser considerados.
 * Também é possível realizar expressões matemáticas e chamar funções dentro de ${}
 */
const template = `
    Nome: ${nome}
    Idade: ${17+3}`

const up = texto => texto.toUpperCase() 

console.log(concatenacao, template)
console.log(`Ei... ${up('cuidado')}`)