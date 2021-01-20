let valor // Não inicializada
console.log(valor)

valor = null //ausência de valor, porém a variável foi definida, apenas não aponta para nenhum endereço de memória
console.log(valor)

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // Evite atribuir undefined
console.log(!!produto.preco)
console.log(produto)

// delete produto.preco - delete remove o atributo

produto.preco = null // Sem preço
console.log(!!produto.preco)
console.log(produto)