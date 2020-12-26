$( "#nome" ).blur(function() {
    var nome = $("#nome" ).val();
    $("#Textnome").text(nome);
});

$( "#departamento" ).blur(function() {
    var departamento = $("#departamento" ).val();
    $("#Textdep").text(departamento);
});

$( "#telefone" ).blur(function() {
    var telefone = $("#telefone" ).val();
    $("#Texttel").text(telefone );
});

$( "#email" ).blur(function() {
    var email = $("#email" ).val();
    $("#Textemail").text(email );
});

$( "#cargo" ).blur(function() {
    var cargo = $("#cargo" ).val();
    $("#Textcargo").text(cargo);
});

$( "#empresa" ).blur(function() {
    var empresa = $("#empresa" ).val();
    $("#Textempresa").text(empresa);
   
});






$( "#link1" ).blur(function() {
    var link1 = $("#link1" ).val();
    alert(link1);
});

$( "#link2" ).blur(function() {
    var link2 = $("#link2" ).val();
    alert(link2);
});


$( "#link3" ).blur(function() {
    var link3 = $("#link3" ).val();
    alert(link3);
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
