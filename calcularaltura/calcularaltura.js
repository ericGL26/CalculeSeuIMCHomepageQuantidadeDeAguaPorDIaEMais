var menino = document.getElementById('selecionar_menino');
var menina = document.getElementById('selecionar_menina');
var altura_pai = document.getElementById('input_altura_pai_js');
var altura_mae = document.getElementById('input_altura_mae_js');
var div_central = document.getElementById('div_central');
var titulo = document.getElementById('titulo');
var resultado = document.getElementById('resultado');
var informa = document.getElementById('informa')
var div_resultado = document.getElementById('div_resultado_js')
var engloba_resultado = document.getElementById('engloba_resultado')

document.body.style.overflow = 'hidden'

menino.addEventListener('click', function(){
    var altura = (parseFloat(altura_mae.value) + parseFloat( altura_pai.value) + 0.13) / 2
    titulo.innerText = 'Resultado:'
   resultado.innerText = 'Quando se tornar adulto, O menino deverá ter ' + altura + ' m'
   informa.innerText = 'Esta previsão é meramente uma estimativa, sendo possível que a criança possa ter uma altura superior ou inferior à indicada'
   document.body.style.overflow = 'visible'
});

menina.addEventListener('click', function(){
    var altura = (parseFloat(altura_pai.value) + parseFloat(altura_mae.value) - 0.13) / 2;
    resultado.innerText = 'Quando se tornar adulto, A menina deverá ter ' + altura + ' m'
   informa.innerText = 'Esta previsão é meramente uma estimativa, sendo possível que a criança possa ter uma altura superior ou inferior à indicada'
   document.body.style.overflow = 'visible'
    titulo.innerText = 'Resultado:'
})
//mudar cor do botao menino
menino.addEventListener('mouseenter', function(){
    menino.style.backgroundColor = 'rgb(173, 216, 230)'
})

menino.addEventListener('mouseleave', function(){
    menino.style.backgroundColor = 'white'
})

//mudar cor do butao menina
menina.addEventListener('mouseenter', function(){
    menina.style.backgroundColor = 'rgb(255, 182, 193)'
})

menina.addEventListener('mouseleave', function(){
    menina.style.backgroundColor = 'white'
})