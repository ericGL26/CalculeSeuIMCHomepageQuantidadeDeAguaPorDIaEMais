const usernome = document.getElementById('usernome')
var usuario = JSON.parse(localStorage.getItem("usuario"));
usernome.innerText = usuario.nome

// Recupera a cor selecionada do localStorage
const corSelecionada = localStorage.getItem("cor-selecionada");
document.body.style.backgroundColor = corSelecionada.toLowerCase();

//parte de alterar a foto
var minha_foto = document.getElementById('minha_foto')
var valor_foto = localStorage.getItem('valor_input_foto');
console.log(minha_foto)
minha_foto.src = valor_foto


function verificaLogado(){
	var logado = localStorage.getItem('logado');
	console.log(logado)
	if(!logado){
		window.location.href = "../login/login.html"
	}
}

verificaLogado()
