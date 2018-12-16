var procesarRecursos=(function(){

    var procesarRecursos=function(respuesta){
        var objeto=ProcesarCSV.crearArreglo(respuesta);
        var objetoURLS=procesadorURLS.procesarURLS(objeto); 
        for(var i=0;i<objetoURLS.urls.length;i++){
            XHR.get({
                "url":objetoURLS.urls[i],
                "exito":function(xhr,url){
                    procesarRespuestas.comprobarCondicion(xhr.responseText,xhr.responseURL);
                },
                "fallo":function(xhr,url){
                    if(xhr.responseURL!==""){
                        tabla.agregarFila(
                            {
                                "recurso":xhr.responseURL,
                                "suma":"...",
                                "Informacion":"Archivo fallido"
                            },"fallo"
                        );
                    }else{
                        tabla.agregarFila(
                            {
                                "recurso":url,
                                "suma":"...",
                                "Informacion":"El servidor no responde"
                            },"fallo"
                        );
                    }
                }
            });
        }
    };

    return{
        "procesarRecursos":procesarRecursos
    };

})();