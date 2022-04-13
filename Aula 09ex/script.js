function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Sua idade: ${idade}`
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            gen = 'Homem'
            if( idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'bebe01.png')
            } else if( idade < 21 ){
                //jovem
                img.setAttribute('src', 'jovem01.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'adulto01.png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso01.png')
            }
        } else {
            gen = 'Mulher'
            if( idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'bebe02.png')
            } else if( idade < 21 ){
                //jovem
                img.setAttribute('src', 'jovem02.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'adulto02.png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso02.png')
            }
        }
        res.style.textAlign = 'Center'
        res.innerHTML = `Detectamos ${gen} com ${idade} anos.`
        res.appendChild(img)
    }

}