let nota1 = Number(prompt("Digite sua 1 nota:"))
let nota2 = Number(prompt("Digite sua 2 nota:"))
let nota3 = Number(prompt("Digite sua 3 nota:"))
let nota4 = Number(prompt("Digite sua 4 nota:"))
let nota5 = Number(prompt("Digite sua 5 nota:"))

var soma = (nota1 + nota2 + nota3 + nota4 + nota5)
var media = (soma/5).toFixed(2)

if (media > 7) {
    console.log ("Sua média é " + media+ ". Você está Aprovada!")
} else if (media < 5) {
    console.log("Sua média é " + media+ ". Você está Reprovada!")
} else {
    console.log("Sua média é " + media+ ". Você está na recuperação.")
}