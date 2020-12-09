// Os exemplos abaixo forçam uma conversão para verdadeiro ou falso

// Neste exemplo o valor definido na variável é um booleano, portanto retornará o valor false
let isAtivo = false
console.log(isAtivo)

// Neste momento o valor da variável é alterado para true, mas continua sendo um booleano
isAtivo = true
console.log(isAtivo)

// No exemplo abaixo o valor declarado na variável não é um booleano, porém, ao utilizar o operador de negação (!), uma conversão para booleano é forçada
isAtivo = 1
console.log(!!isAtivo)

// Os exemplos abaixo retornam casos verdadeiros
console.log('Os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

// Os exemplos abaixo retornam casos falsos
console.log('Os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('Para finalizar...')
console.log(!!('' || null || 0 || ' '))

let nome = ''
console.log(nome || 'Desconhecido')
nome = 'Lucas'
console.log(nome || 'Desconhecido')