//Variaveis definidas com var sofrem o efeito hoisting
console.log('a =', a)
var a = 2
console.log('a =', a)

//Variaveis definidas com let geram erro se forem chamadas antes de definidas, pois não sofrem o efeito hoisting
console.log('b =', b)
let b = 2
console.log('b =', b)