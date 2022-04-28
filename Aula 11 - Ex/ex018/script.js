function tabuada(){
    let num = window.document.getElementById('txtn')
    let tab = window.document.getElementById('selTab')
    //let res = window.document.getElementById('res')
    

    if (num.value.length == 0){
        window.alert('[ERRO] Digite um número!')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''
        for (let cont=1; cont<=10; cont++){
            let item = document.createElement('option')
            item.text = `${n} x ${cont} = ${n*cont}`
            item.value = `tab${cont}`
            tab.appendChild(item)
            cont++
        }

        

    }
}