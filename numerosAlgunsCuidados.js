// Esta sentença retornaria um número muito grande, portanto no JS retorna-se infinity

console.log(7 / 0)

/*  Em JS é possível realizar operações matemáticas 
 * (exceto soma, pois o operador + no contexto de string serve para concatenar) com argumentos do tipo string, 
 * mas apenas quando o conteúdo da variável esta de acordo com a estrutura de dados do tipo number
 */
console.log("10.5" / 2) 

/* Calculos como o da sentença abaixo geram imprecisões, 
 * por conta do JS utilizar uma especificação do I3E que é mais rápida que outras,
 * porém menos precisa
 */

 console.log(0.1 + 0.7)

// Para utilizar uma função, passando como argumento um número e não uma variável, é necessário utilizar "()"

 console.log((17.7775).toFixed(3))
 console.log((9).toString(2))