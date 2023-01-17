function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('itxtano')
  var res = document.querySelector('div#res')

  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert("[ERRO] Verifique os dados e tente novamente!")
  } else {
    var fsex = document.getElementsByName("radsex")
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[1].checked) {
      genero = 'Mulher'
      if (idade >= 0 && idade < 10) {
        img.setAttribute('src', 'assets/bebe-f.png')
      } else if (idade < 21) {
        img.setAttribute('src', 'assets/jovem-f.png')
      } else if (idade < 50) {
        img.setAttribute('src', 'assets/adulta.png')
      } else {
        img.setAttribute('src', 'assets/idosa.png')
      }
    } else if (fsex[0].checked) {
      genero = 'Homem'
      if (idade >= 0 && idade < 10) {
        img.setAttribute('src', 'assets/bebe-m.png')
      } else if (idade < 21) {
        img.setAttribute('src', 'assets/jovem-m.png')
      } else if (idade < 50) {
        img.setAttribute('src', 'assets/adulto.png')
      } else {
        img.setAttribute('src', 'assets/idoso.png')
      }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com idade de ${idade}`
    res.appendChild(img)
  }
}