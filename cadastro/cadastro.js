 var email = document.getElementById('input_email')
 var senha = document.getElementById('input_senha')
 var butao_enviar = document.getElementById('butao')
 var nome = document.getElementById('input_name')

const inputEmail = document.getElementById("email");
const mensagemEmail = document.getElementById("mensagem-email");

 function salvar() {

 	if(email.value == "" || senha.value == "" || nome.value == ""){
 		alert('preencha os campos');
 	}else{
 		if(email.value.includes("@")){
			function verificarcadastro(){
				localStorage.setItem('cadastrado', true)
			}
			
	 		if(localStorage.getItem("usuarios")){
	 			
			 	var usuarios = JSON.parse(localStorage.getItem("usuarios"));
			 	//console.log(localStorage.getItem('usuarios'))
				console.log(btoa(senha.value))
			 	usuarios.push({email: email.value, senha: btoa(senha.value), nome: nome.value});

			 	
			 	localStorage.setItem("usuarios", JSON.stringify(usuarios));


				 window.location.href = "../login/login.html";
				 	
		 	}else{
		 		console.log(email.value, senha.value, nome.value)
		 		localStorage.setItem("usuarios", JSON.stringify([{email: email.value, senha: btoa(senha.value), nome: nome.value}]));
				console.log(senha.value)
		 	}

 		}else{
 			alert('ensira um email valido!')
 		}

	 

 	}
} 

