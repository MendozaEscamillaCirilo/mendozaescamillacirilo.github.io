var procesarRespuestas=(function(){
    var suma={};

    var procesar=function(respuesta,url,cantidad){
        var objeto=ProcesarCSV.crearArreglo(respuesta);
        console.log(url);
        var sumaObjeto=moduloSuma.sumaTotal(objeto);
        suma[url]=sumaObjeto;
        console.log(sumaObjeto);
        if(cantidad===Object.keys(suma).length){
            mostrarSuma();
        }
    };

    var comprobarCondicion=function(respuesta,url){
        var objeto=ProcesarCSV.crearArreglo(respuesta);
        var sumaObjeto=moduloSuma.sumaTotal(objeto);
        if(sumaObjeto>=500 && sumaObjeto<=1500){
            tabla.agregarFila(
                {
                    "recurso":url,
                    "suma":sumaObjeto,
                    "Información":"dentro del rango con exito"
                },"exito"
            );
        }else{

            if(!Number.isNaN(sumaObjeto)){
                tabla.agregarFila(
                    {
                    "recurso":url,
                    "suma":sumaObjeto,
                    "Informacion":"suma fuera del rango"
                    },"diferente"
                );
            }else{
                tabla.agregarFila(
                    {
                    "recurso":url,
                    "suma":sumaObjeto,
                    "Informacion":"Error en la suma"
                    },"fallo"
                );
            }
            
            
        }
    };

    var mostrarSuma=function(){
        var total=0;
        for (const key in suma) {
            if (suma.hasOwnProperty(key)) {
                total+=suma[key];
            }
        }
        console.log("Total: "+ total);
    };

    return{
        "procesar":procesar,
        "mostrarSuma":mostrarSuma,
        "comprobarCondicion":comprobarCondicion
    };

    
})();