var barra_lateral = document.getElementById('barra_expansiva');
var butao_expandir_barra = document.getElementById('botao_expandir_barra');
var input_checkbox = document.getElementById('input_checkbox')
var input_texto_tarefa = document.getElementById('input_texto_tarefa')

//parte de expandir a barra lateral

butao_expandir_barra.addEventListener('click', function() {

if (barra_lateral.style.width == "100px") {
    barra_lateral.style.width = "320px";
} else {
    barra_lateral.style.width = "100px";

}

});

//change para verificar se o checkbox está marcado

input_checkbox.addEventListener('change', function() {
    input_checkbox.value = true;

    localStorage.setItem('input_texto_tarefa',input_texto_tarefa.value)


    if (input_checkbox.checked === true)  {
        function minhaFuncao(){
            alert('Sua tarefa esta atrasada' + input_texto_tarefa.value)
        }
     } else {
         
     }
     setTimeout(minhaFuncao, 3000);

});