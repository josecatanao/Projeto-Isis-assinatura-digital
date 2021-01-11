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

$( "#imagem" ).keyup(function() {
    var imagem = $("#imagem" ).val();
    $("#foto").attr("src", imagem);
   
});

function alerta(){
    alert("Assinatura Gerada")
}

new ClipboardJS('.btn');