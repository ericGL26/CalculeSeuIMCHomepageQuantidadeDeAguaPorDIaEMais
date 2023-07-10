var email = document.getElementById('input_email');
var senha = document.getElementById('input_senha');

var emailinvalidop = document.getElementById('emailinvalidop')
var senhavalida = document.getElementById('senhavalida')

var puxarusuarios =  localStorage.getItem('usuarios');
var senha64 = localStorage.getItem('senha')
var puxarobj = JSON.parse(puxarusuarios);


function deixaLogado(){
	localStorage.setItem('logado', true);
}

function verificar() {

	var contavalida = false;

	for (var i = 0; i < puxarobj.length; i++) {
		if (puxarobj[i].email == email.value && atob(puxarobj[i].senha) == senha.value){
			localStorage.setItem("usuario", JSON.stringify(puxarobj[i]));
			window.location.href = "../dashboard/dashboard.html";
		}else{
			if(email.value == ""){
				const paragrafo = document.getElementById('emailinvalidop');
		  		paragrafo.innerText = 'insira um email valido';
			}else{
				if(!contavalida){
					alert('email incorreto')
				}
			}


			if(senha.value == "" ){
				const paragrafo_senha = document.getElementById('senhavalida');
		  		paragrafo_senha.innerText = 'insira uma senha valida';
			}else{
				if(!contavalida){
					alert('senha incorreta')
				}
			}

		}
	}

	deixaLogado()
}