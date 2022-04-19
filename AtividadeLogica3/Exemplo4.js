//04) Imprima na tela os números pares existentes entre 0 e 100.

function passingPairs(num){

    while (num <= 100){
        num++

        if ((num % 2) == 0) {
        console.log(`Números pares = ${num}`);
        }
    }
}
passingPairs(0)

//Utilizando o For

// function passingPairsFor(i) {
    
//     for (i = 0; i <= 100; i++) {
//         if ((i % 2) == 0) {
//         console.log(`Números pares = ${i}`);
//         }
//     }
// }
// passingPairs(0)


//Outras formas

// let num = 0

//     while(num < 100){
//         num+=2
//     console.log(num)
//     }

// for (let i = 0; i <= 100; i += 2) {
//     console.log(i);
// }




