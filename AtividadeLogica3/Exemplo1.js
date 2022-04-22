//1) Utilize a estrutura de repetição for para imprimir no console conforme instruções:

//a) números de 1 a 50
console.log('inicio A')

for(let i = 1; i <= 50 ; i++){

    console.log(i)
  }
  console.log('fim A')

//b) quando chegar no número 25 interrompa a instrução e pare o loop
  console.log('inicio B')

  for(let x = 1; x <= 50 ; x++){
    if(x === 25){
        break

    }
    console.log(x)
}
  console.log('fim B')

//c) quando chegar no número 10 pule a instrução 
  console.log('inicio C')

  for(let y = 1; y <= 50 ; y++){
    if(y === 10){
        continue
    }
    console.log(y)
}
  console.log('fim C')




  
// // function count(x){

// //     while(x<50){
// //         x++

// //         if(x ===10) {
// //             console.log('CONTINUE')
// //             continue
// //         }
// //         if(x===25){
// //             console.log('BREAK')
// //             break
// //         }
// //         console.log(x)
// //     }
// // }
// // count(0)