// Função sem retorno

function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// Ao chamar a função passando apenas um parametro, o segundo é setado como undefined automaticamente, gerando o retorno NaN(Not a Number).

imprimirSoma(1)

// Ao chamar a função passando mais parametros do que é exigido, o JS apenas ignora. Outras linguagens gerariam erro.

imprimirSoma(1, 10, 20, 30, 40)

// Função com retorno
// É possível definir um valor padrão para o argumento de uma função
function soma(a = 0, b = 1){
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))