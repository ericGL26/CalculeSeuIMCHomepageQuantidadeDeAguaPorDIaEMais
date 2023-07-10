var logincafe = document.getElementById('logincafe')

function verificarcadastro(){
var cadastrotruefalse = localStorage.getItem('cadastrado')
 if(!cadastrotruefalse){
    window.location.href = "../cadastro/cadastro.html"
 }
}


var valor_input_texto_tarefas = localStorage.getItem('input_texto_tarefa')

function minhaFuncao() {
   alet('sua tarefa esta atrasada ' + valor_input_texto_tarefas)
}

setTimeout(minhaFuncao, 10000);

//function minhaFuncao() {
 //  alert('sua tarefa esta atrasada ' + valor_input_texto_tarefas)
//}