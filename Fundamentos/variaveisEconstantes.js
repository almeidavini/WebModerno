/* Existem duas formas de se declarar uma variavel em JS.
 * Segue abaixo as formas possiveis: 
 */
var a = 3
let b = 4

/* É possível redeclarar uma varial, quando é definida com a palavra var.
 * Não é possível realizar isso com uma variavel definida com a palavra let.
 * Não existe uma razão lógica para redeclarar uma variavel.
 */ 
var a = 30

console.log(a)
/* A sentença abaixo retornará um erro:
 * let b = 40
 * console.log(b)
 */

 // É possível reatribuir valores a variaveis já definidas. Segue exemplo abaixo:
 a = 300
 b = 400

 console.log(a, b)

 /* Uma constante é declarada através da palavra reservada "const".
  * Utiliza-se constantes no caso de informações que sempre serão estáticas.
  */
 const c = 5

 console.log(c)
 /* Não é possível reatribuir valores a uma constante.
  * A sentença abaixo retornará um erro:
  * c = 50
  * 
  * console.log(c)
  */