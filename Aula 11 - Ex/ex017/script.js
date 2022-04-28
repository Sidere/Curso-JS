function contar(){
    let ini = window.document.getElementById('txtinc')
    let fim = window.document.getElementById('txtfim')
    let passo = window.document.getElementById('txtpas')
    let res = window.document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){
        window.alert('[ERRO] Faltam dados')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            window.alert('O passo não pode ser menor ou igual a ZERO, considerando PASSO 1')
            p = 1
        }
        if (i < f){
            //contagem crescente
            for(let cont=i; cont<=f; cont+=p){
                res.innerHTML += `${cont} \u{1F480}`
            }
 
        } else {
            //contagem decrescente
            for(let cont=i; cont>=f; cont-=p){
                res.innerHTML += `${cont} \u{1F480}`
            }   
        }
        res.innerHTML += `\u{1F3C1}`
        }
   }
