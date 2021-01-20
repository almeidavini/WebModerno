/*
 * JavaScript é uma linguagem orientada a objetos: 
 * isso significa que a maioria das coisas em JavaScript são Objetos. 
 * Por exemplo, as funções são Objetos. 
 * Os únicos elementos que não são objetos são os Dados de Tipos Primitivos: string, number, boolean, null e undefined.
 * Uma das diferenças entre os dois é que os dados de tipos primitivos são passados como valor e os objetos são passados como referência.
 * Por Valor: Significa criar uma CÓPIA do original.
 * Por Referência: Significa criar um APELIDO (alias) para o original.
 */ 

 // Atribuindo um valor com o operador = com Valores Primitivos e Objetos
//  var name = "Carlos"; var firstName = name;

//  name = "Carla";
 
//  console.log(name); // "Carla"
//  console.log(firstName); // "Carlos"

 // Com objetos, o operador = funciona por referência
 var myName = { firstName: "Carlos" }; var identity = myName;

 myName.firstName = "Carla";
 
 console.log(myName.firstName); // "Carla"
 console.log(identity.firstName); // "Carla"

// Dados de Tipos Primitivos são passados para uma função como valor
var myName = "Carlos";

function myNameIs(aName){ aName = "Carla"; }

myNameIs(myName);

console.log(myName); // "Carlos"

// Objetos são passados para uma função como referência
var myName = {firstName: 'José'};

function myNameIs(aName){ aName.firstName = "Carla"; }

myNameIs(myName);

console.log(myName); // Object {firstName: "Carla"}