//é 35 ml de água multiplicado pelo peso corporal de cada um.
var input_peso = document.getElementById('input_peso');
var butao_enviar = document.getElementById('butao_enviar_input')
var foto_x = document.getElementById('imagem_logo')
var palavra_icon_agua = document.getElementById('palavra_cal_agua')
var palavra_icon_altura = document.getElementById('palavra_cal_altura')
var input_resultado = document.getElementById('input_resultado')
var texto_quantidade_copo = document.getElementById('texto_quantidade_copo')
var texto_quantidade_garrafa = document.getElementById('texto_quantidade_garrafa')

    input_peso.maxLength = 5;

    butao_enviar.addEventListener('click', function(){

    var agua = 35 * input_peso.value
        var milhar = Math.floor(agua / 1000)
        var dezenas = Math.floor(agua / 100 % 10)
        var unidades = Math.floor(agua % 10)
        input_resultado.innerText = milhar + ' litros ' + dezenas + unidades + ' ml'
        //quantidade de copos

        var milhar_completa = agua
        
        var quantidade_copo = Math.floor(milhar_completa / 310)
        var quantidade_garrafa = Math.floor(milhar_completa / 500)

        texto_quantidade_copo.innerText = quantidade_copo + ' copos de 350ml'
        texto_quantidade_garrafa.innerText = quantidade_garrafa + ' garrafas de 500ml'

    })

    // <div class="div_engloba_icon_copo">
   // <img class="icon_copo" src="../copo.webp">
  //  </div>