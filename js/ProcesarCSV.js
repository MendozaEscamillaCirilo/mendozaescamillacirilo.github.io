var ProcesarCSV=(function(){

    var crearArregloObjetos=function(respuesta){
        var renglones=respuesta.split("\n");
        var keys=renglones[0].split("|");
        var objetos=[];
        for(let i=1;i<renglones.length;i++){
            objetos[i-1]=crearObjeto(keys,renglones[i].split("|"));
        }
        return {"valores":objetos};
    };

    var crearObjeto = function(key,valores){
        var objeto={};
        for(let i=0;i<key.length;i++){
            objeto[key[i]]=valores[i];
        }
        return objeto;
    };

    return{
        "crearArreglo":crearArregloObjetos
    };
}
)();


    