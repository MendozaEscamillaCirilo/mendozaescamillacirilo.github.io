var procesadorURLS=(function(){
    var urls=[];
    var procesarURLS=function(objeto){
        if (objeto.hasOwnProperty("valores")){
            var arreglo=objeto["valores"]; 
            concatenar(arreglo);
        }
        return{
            "urls":urls
        };
    };

    var concatenar=function(arreglo){
        var cadena="";
        console.log(arreglo);
        for(var i=0;i<arreglo.length;i++){
            console.log("al = " + arreglo[i]["nodo"]);
            if(!(arreglo[i]["nodo"]).startsWith('http://')){
                arreglo[i]["nodo"]="http://"+arreglo[i]["nodo"];
            }
            if(!arreglo[i]["recurso"].startsWith('/')){
                arreglo[i]["recurso"]="/"+arreglo[i]["recurso"];
            }
            cadena=arreglo[i]["nodo"]+":"+arreglo[i]["puerto"]+arreglo[i]["recurso"];
            urls[i]=cadena;
        }
    };

    return{
        "procesarURLS":procesarURLS
    };

})();