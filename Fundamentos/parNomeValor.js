// par nome/valor
//Contexto léxico: local no qual a variavel foi definida dentro do código

const saudacao = 'Opa' //Contexto léxico 1

function exec() {
    const saudacao = 'Falaaa' //Contexto léxico 2
    return saudacao
}

//Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)