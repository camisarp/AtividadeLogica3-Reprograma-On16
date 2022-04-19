/*1) Utilize a estrutura de repetição for para imprimir no console conforme instruções:

a) números de 1 a 50  
b) quando chegar no número 25 interrompa a instrução e pare o loop 
c) quando chegar no número 10 pule a instrução */

function count(x){

    while(x<50){
        x++

        if(x ===10) {
            console.log('CONTINUE')
            continue
        }
        if(x===25){
            console.log('BREAK')
            break
        }
        console.log(x)
    }
}
count(0)