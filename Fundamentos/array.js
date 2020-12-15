// Declarando um array
const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])

// Ao tentar acessar um índice inexistente dentro do array, é retornado UNDEFINED
console.log(valores[4])

// É possível atribuir valor à um índice do array
valores[4] = 10
console.log(valores[4])

// É possível deixar vazio entre índices, conforme o exemlo abaixo
valores [10] = 10
console.log(valores)

// A função length conta a quantidade de elementos dentro de um array
console.log(valores.length)

// A função push permite envar valores para um array
valores.push({id: 3}, false, null, 'teste')
console.log(valores)

// A função pop permite remover valores de dentro de um array
console.log(valores.pop())

// Também é possível remover utilizando delete
delete valores[0]
console.log(valores)

// Em Javascipt um array é do tipo object
console.log(typeof valores) 