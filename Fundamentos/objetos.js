// Objeto: uma coleção de chaves e valores

const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Deconto Legal'] = 0.40 // Em javascript é possível definir um atributo com espaços, basta utilizar esta notação

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
}

console.log(prod2)

'{"nome": "Camiseta Polo", "preco": 79.90}' // Notação JSON - JavaScript Object Notation