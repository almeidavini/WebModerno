// Função sem retorno

function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// Ao chamar a função passando apenas um parametro, o segundo é setado como undefined automaticamente, gerando o retorno NaN(Not a Number).

imprimirSoma(1)

// Ao chamar a função passando mais parametros do que é exigido, o JS apenas ignora. Outras linguagens gerariam erro.

imprimirSoma(1, 10, 20, 30, 40)