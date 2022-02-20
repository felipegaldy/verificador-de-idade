

function verificar() {

    var data = new Date()
    var ano1 = data.getFullYear()
    var anohtml = window.document.querySelector('input#anotxt')
    var res = window.document.querySelector('div#res')
    
    if (anohtml.value.length == 0 || anohtml.value > ano1 ) {
        window.alert('ERROR')
    } else {
        var sex = window.document.getElementsByName('radiosex')
        var idade = ano1 - Number(anohtml.value)
        res.innerHTML = `Esse ano você completa ${idade} anos de idade`
        var genero = ``
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (sex[0].checked) {
            genero = `Homem`
            if (idade >= 0 && idade <= 14 ) {
                //criança
                img.setAttribute('src','criançam.jpg')
            }else if ( idade >= 15 && idade <= 30) {
                //jovem
                img.setAttribute('src','jovem.jpg')
            }else if ( idade < 50) {
                //adulto
                img.setAttribute('src','adulto.jpg')
            }else {
                //idoso
                img.setAttribute('src','idoso.jpg')
            }
        } else if (sex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 14 ) {
                //criança
                img.setAttribute('src','criançaf.jpg')
            }else if ( idade >= 15 && idade <= 30) {
                //jovem
                img.setAttribute('src','jovemf.jpg')
            }else if ( idade < 50) {
                //adulto
                img.setAttribute('src','adulta.jpg')
            }else {
                //idoso
                img.setAttribute('src','idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `${genero} com ${idade} anos de idade`
        res.appendChild(img)
        

    }
    
    

}