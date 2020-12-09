const escola = "Cod3r"

// A função charAt retorna a letra que está no índice referente ao número que é passado como argumento.
console.log(escola.charAt(4))

/* Se o índice passado como argumrnto não existir dentro da string, 
 * o valor retornado pela função será um espaço em branco.
 */
console.log(escola.charAt(5))

/* A função charCodeAt retorna o número referente a tabela ASCII ou UNICODE 
 * do índice que foi passado como argumento.
 */
console.log(escola.charCodeAt(0))

/* A função indexOf retorna o índice referente ao caracter que foi passado como argumento na chamada da mesma.
 * Se o caracter não existir dentro da string, o valor retornado será -1
 */
console.log(escola.indexOf('r'))

/* A função substring serve para "quebrar" a string, 
 * podendo ser a partir de um índice que é passado como argumento
 * ou entre dois índices que são passados na chamada da mesma.
 */
console.log(escola.substring(2))
console.log(escola.substring(0, 3))

// A função concat permite concatenar um valor literal (não armazenado em uma variável) ao valor de uma variável
console.log('Escola '.concat(escola).concat("!"))

// A função replace permite alterar um determinado índice que é passado como argumento
console.log(escola.replace(3, 'e'))

/* A função split permite converter uma string em array, 
 * passando como argumento o caracter que a partir dele será dividido os arrays
 */
console.log('Vinicius,Lucas,Nicolle,Adriana,Newton'.split(','))