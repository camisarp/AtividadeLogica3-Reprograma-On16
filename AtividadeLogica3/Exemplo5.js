//5) Crie uma função que irá receber um número e retornar o fatorial dele. por exemplo: 3! = 3 * 2 * 1 // 6

function factorial(num) {
    let resultado = num

    for (let i = 1; i < num; i++){
        resultado = resultado * i
    }
    return resultado
}
console.log(factorial(3))//6