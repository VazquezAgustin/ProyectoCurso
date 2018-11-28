(function(){
    "use strict";

    document.addEventListener("DOMContentLoaded", function(){

        console.log("listo");

        // Campos datos usuarios
        var nombre = document.getElementById("nombre");
        var apellido = document.getElementById("apellido");
        var email = document.getElementById("email");

        // Campos Pases
        var pase_dia = document.getElementById("pase_dia");
        var pase_dosdias = document.getElementById("pase_dosdias");
        var pase_completo = document.getElementById("pase_completo");

        //Botones y divs
        var calcular = document.getElementById("calcular");
        var errorDiv = document.getElementById("error");
        var btnRegistro = document.getElementById("btnRegistro");
        var resultado = document.getElementById("lista-productos");

    }); //DOM CONTENT LOADED
})()