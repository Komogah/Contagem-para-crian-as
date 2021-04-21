function contar() {
    var início = document.getElementById('ini')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('pas')
    var resultado = document.getElementById('res')
    if(passo.value.length == 0 || início.value.length == 0 || fim.value.length == 0 || passo.value == 0) {
        resultado.innerHTML = 'Impossível contar! &#128546'
    }else{
        var msg = 'Contagem: '
        
        for(var c = Number(início.value); c <= Number(fim.value); c += Number(passo.value)) {
            msg += String(c)
            if(c + 1 <= Number(fim.value)) {
                msg += ' &#8611 '
            }
            
        }
        msg += ' &#10004 '
        resultado.innerHTML = msg
    }

}