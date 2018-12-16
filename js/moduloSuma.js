var moduloSuma=(function(){


    var sumaTotal=function(objetos){
        var total=0;
        for (const key in objetos){
            if (objetos.hasOwnProperty(key)) {
                total+=sumarObjetos(objetos[key]);
            }
        }
        return total;
    };

    var sumarObjetos=function(objetos){
        var total=0;
        for(var i=0;i<objetos.length;i++){
            for (const key in objetos[i]) {
                if (objetos[i].hasOwnProperty(key)) {
                    total+=parseInt(objetos[i][key]);
                }
            }
        }
        return total;
    };
    return{"sumaTotal":sumaTotal};
})();