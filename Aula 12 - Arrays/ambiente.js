let num = [5, 8, 2, 9, 3]
num.push(1) //comando para adicionar mais um elemento a um array
num.sort() //organizar em ordem crescente

console.log(num)
console.log(`Vetor de ${num.length} posições`) //num.length //pra saber tamanho do array
console.log(`A segunda posição é o vetor ${num[1]}`)
let index = num.indexOf(4)
if (index == -1){
    console.log(`Valor não encontrado`)
} else {
console.log(`O valor 8 está na posição ${index}`)
}