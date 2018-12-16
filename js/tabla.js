var tabla=(function(){
    var filas=0;
    var agregarFila=function(objeto,tipo){
        filas=filas+1;
        var tbody=document.getElementById("tablaResultados");
        var fila=document.createElement("tr");
        var celda=document.createElement("td");
        celda.textContent=filas
        fila.appendChild(celda);
        for (const key in objeto) {
            if (objeto.hasOwnProperty(key)) {
                celda=document.createElement("td");
                celda.textContent=objeto[key];
                fila.appendChild(celda);
            }
        }
        
        tbody.appendChild(fila);
        fila.setAttribute("class",tipo);

    };

    var limpiarTabla=function(){
        var tbody=document.getElementById("tablaResultados");
        var hijos=tbody.children;
        for(var i=hijos.length-1;i>0;i--){
            tbody.removeChild(hijos[i]);
        }
        filas=0;
    };

    return{
        "agregarFila":agregarFila,
        "limpiarTabla":limpiarTabla
    };
})();