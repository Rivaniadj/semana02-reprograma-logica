//8 - Crie um algoritmo que receba três notas de um aluno, calcule sua média e mostre as 
//seguintes mensagens de acordo com cada situação:

//- Se a media for igual ou maior que 7 - Aprovado
//- Se a media for maior e igual a cinco e menor que 7 - Recuperação
//- Se a media for menor que 5 - Reprovado//


let nota01 = 6
let nota02 = 4
let nota03 = 8

let media = (nota01 + nota02 + nota03)

if (media >= 7){
    console.log("aprovado")
} 
   
else if (media ===5) {
        console.log("recuperacao")
    }
else if (media < 7){
    console.log("recuperacao")
}

else (media > 5)  
    console.log("reprovado")


