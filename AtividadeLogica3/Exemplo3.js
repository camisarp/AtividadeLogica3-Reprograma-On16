//3) Faça um programa que dado um número, imprime no (console.log) a tabuada do mesmo de 1 a 10.

function multiplicationTable(num){

    for(x=0; x<=10 ; x++)
    console.log(`${num} x ${x} = ${(num*x)}`)
}
multiplicationTable(4)
