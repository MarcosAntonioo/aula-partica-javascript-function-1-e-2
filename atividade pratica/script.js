// Questão 1

var multiplicacao = (p1, p2) => {
    let calculo = p1 * p2;
      return calculo;
    }
    console.log(multiplicacao(5, 5));
// Questão 2

var valorMaior = (p1,p2,p3) => {
    if(p1 > p2 && p3){
        console.log(p1)
    }
    if(p2 > p1 && p3){
        console.log(p2)
    }
    if(p3 > p2 && p1){
        console.log(p3)
    }
}
valorMaior(8, 7, 6);

// Questão 3

var parOUimpar = (n) => {
    if(n % 2 == 0){
        console.log("Esse numero é par!")
    } else {
        console.log("Esse numero é impar!")
    }
} 
parOUimpar(5);