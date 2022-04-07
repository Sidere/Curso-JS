var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são ${hora} horas.`)
if(hora < 12 && hora > 5){
    console.log('Bom dia, flor do dia')
} else if( hora < 18){
    console.log('Boa tarde, tarde boa')
} else if(hora >= 18 && hora > 00){
    console.log('Boa noite')
} else {
    console.log('Brincadeiras bobas & gostosas')
}