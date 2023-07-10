var input_peso = document.getElementById('input_peso');
var input_altura = document.getElementById('input_altura');
var input_idade = document.getElementById('input_idade');
var input_resultado = document.getElementById('input_resultado');   
var butao_enviar = document.getElementById('butao_enviar_input')
var botao_expandir = document.getElementById('botao_expandir_lateral')
var barra_lateral = document.getElementById('barra_lateral')
var foto_x = document.getElementById('imagem_logo')
var palavra_icon_agua = document.getElementById('palavra_cal_agua')
var palavra_icon_altura = document.getElementById('palavra_cal_altura')
var icon_gota = document.getElementById('icon_gota')

    input_peso.maxLength = 5;
    input_altura.maxLength = 5;

    butao_enviar.addEventListener('click', function(){

    var imc = input_peso.value / (input_altura.value * input_altura.value)
    console.log(imc)
        
        if(imc < 18.5) {
            console.log('rodou o magreza')
            input_resultado.innerText = imc + ', Magreza'
            input_resultado.style.color = 'brown'

        }else {
            if(imc > 18.5 && imc < 24.9) {
                console.log('rodou o normal')
                input_resultado.innerText = imc + ', Normal'
                input_resultado.style.color = 'green'

        }else {
            if (imc > 24.9 && imc < 34.9) {
                input_resultado.innerText = imc + ', Sobrepeso'
                input_resultado.style.color = 'blue'

            } else {
                if (imc > 30 && imc < 34.9) {
                    input_resultado.style.color = 'red'
                    input_resultado.innerText = imc + ', ObesidadeI'
                } else {
                    if (imc > 35 && imc < 39.9) {
                        input_resultado.style.color = 'red'
                        input_resultado.innerText = imc + ', Obesidade grau II'
                    } else {
                        if(imc > 40) {
                            input_resultado.style.color = 'red'
                            input_resultado.innerText = imc + ', Obesidade grau III'
                        }
                    }
                }
            }
        }
    }
})


botao_expandir.addEventListener('click', function(){
    
    if(barra_lateral.style.width == '100px'){
        barra_lateral.style.width = '300px'
        barra_lateral.style.backgroundColor = 'gray'
        foto_x.src = '../letrax.webp'
        palavra_icon_agua.innerText = 'Calcular sua altura em relacao a sua idade'
        palavra_icon_altura.innerText = 'Calcular quantidade de agua por dia'

    }else {
        barra_lateral.style.width = '100px'
        barra_lateral.style.backgroundColor = 'rgb(50, 155, 242)'
        foto_x.src = '../iconmenu.webp';
        palavra_icon_agua.innerText = ''
        palavra_icon_altura.innerText = ''
    }
})

icon_gota.addEventListener('click', function(){
    window.location.href = '../calcularagua/calcularagua.html'
})