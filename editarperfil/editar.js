var nomeeditar = document.getElementById("input_name");
var emaileditar = document.getElementById("input_email");
var senhaeditar = document.getElementById("input_senha");
var usuariologado = JSON.parse(localStorage.getItem("usuario"));
var paleta_vermelha = document.getElementById("butao_paleta_vermelha");
var paleta_amarela = document.getElementById("butao_paleta_amarela");
var paleta_verde = document.getElementById("butao_paleta_verde");
var input_trocar_foto = document.getElementById('input_mudar_foto')


// Adiciona um ouvinte de evento para quando o botão for clicado
paleta_vermelha.addEventListener("click", function() {
  // Armazena o valor do botão no localStorage
  localStorage.setItem("cor-selecionada", "red" );
  const corSelecionada = this.value;
});




// Adiciona um ouvinte de evento para quando o botão for clicado
paleta_amarela.addEventListener("click", function() {
  // Armazena o valor do botão no localStorage
  const corSelecionada = this.value;
  localStorage.setItem("cor-selecionada", "white");
});





// Adiciona um ouvinte de evento para quando o botão for clicado
paleta_verde.addEventListener("click", function() {
  // Armazena o valor do botão no localStorage
  const corSelecionada = this.value;
  localStorage.setItem("cor-selecionada", "#22212C");

});



emaileditar.value = usuariologado.email;
senhaeditar.value = atob(usuariologado.senha);
nomeeditar.value = usuariologado.nome;

function pegarvalorinputs() {

  var usuarios = JSON.parse(localStorage.getItem("usuarios"));
  var usuariologado2 = JSON.parse(localStorage.getItem("usuario"));

  for (var i = 0; i < usuarios.length; i++) {
    if (usuarios[i].email == usuariologado2.email) {
      usuarios[i].email = emaileditar.value;
      usuarios[i].senha = senhaeditar.value
      usuarios[i].nome = nomeeditar.value;
      console.log(usuarios);
      localStorage.setItem("usuarios", JSON.stringify(usuarios));
      localStorage.setItem(
        "usuario",
        JSON.stringify({
          email: emaileditar.value,
          senha: senhaeditar.value,
          nome: nomeeditar.value,
        })
      );
    }
  }
}

input_trocar_foto.addEventListener('change', function() {
  var valor_input_foto = input_trocar_foto.files[0];
 if (valor_input_foto){
  const reader = new FileReader();
  reader.readAsDataURL(valor_input_foto);

  reader.addEventListener('loadend', function(event) {
    const readertarget = event.target.result;
    localStorage.setItem('valor_input_foto', readertarget);
  });
 } 

 


  
});