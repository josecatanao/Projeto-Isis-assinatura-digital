$( "#nome" ).keyup(function() {
    var nome = $("#nome" ).val();
    $("#Textnome").text(nome);
});

$( "#departamento" ).keyup(function() {
    var departamento = $("#departamento" ).val();
    $("#Textdep").text(departamento);
});

$( "#telefone" ).keyup(function() {
    var telefone = $("#telefone" ).val();
    $("#Texttel").text(telefone );
});

$( "#email" ).keyup(function() {
    var email = $("#email" ).val();
    $("#Textemail").text(email );
});

$( "#cargo" ).keyup(function() {
    var cargo = $("#cargo" ).val();
    $("#Textcargo").text(cargo);
});

$( "#empresa" ).click(function() {
    var empresa = $("#empresa" ).val();
    $("#Textempresa").text(empresa);
   
});

	
function previewImagem(){
    var imagem = document.querySelector('#imagem').files[0];
    var preview = document.querySelector('#foto');
    
    var reader = new FileReader();
    
    reader.onloadend = function () {
        preview.src = reader.result;
    }
    
    if(imagem){
        reader.readAsDataURL(imagem);
    }else{
        preview.src = "";
    }
}

new ClipboardJS('.btn');