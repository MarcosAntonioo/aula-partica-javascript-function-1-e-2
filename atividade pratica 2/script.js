// Questão 1

var media = function (nota) {
    if (nota  >= 7){
      console.log("Aprovado!");
    }else if (nota >= 5 && nota < 7){
      console.log("Recuperação!");
    }else if(nota < 5){
      console.log("Reprovado!")
    }
  }
  media(7);
// Questão 2

var multiplicador = function(n) {
    for(var i = 1; i <= 10; i++){
     console.log(n * i)
    }
   }
   console.log(multiplicador(3));
// Questão 3

var idade = (ano) => {
    let atual = 2021;
     let resultado = atual - ano
     if (resultado >= 18){
       console.log("Você tem" + resultado +  "Parabéns, você é maior de idade.");
     }else{
       return("Sinto muito, tente o próximo ano.")
     }
   }
   idade(2005);