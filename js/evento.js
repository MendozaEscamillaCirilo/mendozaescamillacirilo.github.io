var evento=(function(){
    var eventoBoton=function(){
        var boton=document.getElementById("Boton");
        boton.onclick=function(){
            var input=document.getElementById("Input");
            if(input.value!==""){
                tabla.limpiarTabla();
                XHR.get({
                    "url":input.value,
                    "fallo":function(xhr,url){
                        console.log("Recursos no encontrados");
                    },
                    "exito":function(xhr,url){
                        console.log(xhr);
                        procesarRecursos.procesarRecursos(xhr.responseText);
                    }
                });
            }else{
                console.log("El url del servidor no puede estar vacio.");
            }
        };
    };

    return{
        "eventoBoton":eventoBoton
    };

})();