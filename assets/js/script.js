const calcular = document.getElementById('calcular');
function calculoDistancia(){ 
  var qtdExplosivo  = document.getElementById('qtdExplosivo').value;
  var gramatura = document.getElementById('qtdGramatura').value;
  var fr = document.getElementById('fatoRelatividade').value;
  var resultado = document.getElementById('resultado');

  if(qtdExplosivo != '' && gramatura != '' && fr !=''){
    var ple = qtdExplosivo * gramatura;
    var pleTnt = ple * fr;
    var grains = pleTnt * 15.4;
    var libras = grains / 7000;
    var distancia = (18 * (Math.sqrt(libras)))  ;
    var distanciaMetros = distancia * 0.32;
    
    resultado.innerHTML = `A distância segura é de <strong> ${distanciaMetros.toFixed(2)}</strong> metros aproximadamente.<br>Com a utilização do escudo: <strong> ${(distanciaMetros*0.5).toFixed(2)}</strong> metros aproximadamente.`;
  } else {
    alert("Preencha todos os campos!");
  }
  calcular.addEventListener('click', calculoDistancia);

}

 