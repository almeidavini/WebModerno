let numero = 1

//Variaveis definidas com var tem escopo global e de função. Variaveis definidas com let tem escopo global, de função e de bloco
{
    let numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)