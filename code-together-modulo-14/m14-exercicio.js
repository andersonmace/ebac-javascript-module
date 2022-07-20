//1. Resolva as operações:

// 10 + 15                  = 25
// “10” + 2                 = "102"
// “10” * 2                 = 20
// “10” / 3                 = 3.3333333333333335
// “10” % 3                 = 1
// 10 + true                = 11
// 10 == ”10”               = true
// 10 === “10”              = false
// 10 < 11                  = true
// 10 > 12                  = false
// 10 <= 10.1               = true
// 10 > 9.99                = true
// 10 != “dez”              = true
// “dez” + true             = "deztrue"
// 10 + false               = 10
// 10 * false               = 0
// true + true              = 2
// 10++                     = 11
// 10--                     = 9
// 1 & 1                    = 1 - true
// 1 & 0                    = 0 - false
// 0 & 0                    = 0 - false
// 0 / 1                    = 0
// 5 + 5 == 10              = true
// “5” + ”5” == 10          = "55" == 10 - false
// “5” * 2 > 9              = 10 > 9 - true
// (10 + 10) * 2            = 20 * 2 == 40
// 10 + 10 * 2              = 10 + 20 == 30

//2. Responda as perguntas de acordo com as variáveis.

var branco = 'preto';
var preto = 'cinza';
var cinza = 'branco';
var carro = 'preto';
var valor = 30000;
var prestacao = 750;

// a) branco == “branco” 
// false
// A variável branco recebeu a string "preto"

// b) branco == cinza 
// false
// A variável branco recebeu a string "preto"

// c) carro === branco
// false
// A variável carro recebeu a string "preto"

// d) var cavalo = carro == “preto” ? “cinza” : “marron”; 
// true -> cavalo == "cinza"
// A condição carro == "preto" é verdadeira então a variável cavalo recebe o valor de string "cinza"

// e) Quantas prestações são necessárias para pagar o valor do carro com uma entrada de 3.000? Demonstre a operação. 
var entrada = 3000;
var parcelas = (valor - entrada) / prestacao;
// 36 parcelas

// f) Somando as variáveis de cores é formada uma string de quantos caracteres?
var cores = branco + preto + cinza + carro;
// cores == 'pretocinzabrancopreto'
cores.length
// 21
