let valores = [8, 1, 7, 4, 2, 9]
valores.sort()
console.log(valores)

for(let index in valores){
    console.log(`A posição ${index} tem o seguinte valor ${valores[index]}`)
}