function genera_tabla() {
    var moneda = document.getElementById("moneda3").value;
    var monedas = getList();
    var tabla= document.getElementById("tabla");
    var tblBody = document.createElement("tbody");
    for (var k in monedas) {
        var fila = document.createElement("tr");
        for (var j = 0; j < 2; j++) {
            if (k !== moneda) {
                var columna = document.createElement("td");
                var celda;
                try{
                    if (j == 0) {
                        celda = document.createTextNode(k);
                    } else {
                        celda = document.createTextNode(read(k,moneda,monedas));
                    }
                } catch (e){
                    
                    if (e instanceof TypeError){
                        
                    }
                }

                columna.appendChild(celda);
                fila.appendChild(columna);
            }
        }
        tblBody.appendChild(fila);
    }
    tabla.appendChild(tblBody);
    exists(moneda);
}
function exists(monda){
    var temp= document.getElementsByTagName("tbody");
    if (document.getElementsByTagName("tbody")){
        removetag();
    }
}
function removetag(moneda){
     var moneda = document.getElementById("moneda3").value;
    var monedas = getList();
    var tabla= document.getElementById("tabla");
     var tblBody = document.createElement("tbody");
    for (var k in monedas) {
        var fila = document.createElement("tr");
        for (var j = 0; j < 2; j++) {
            if (k !== moneda) {
                var columna = document.createElement("td");
                var celda;
                try{
                    if (j == 0) {
                        celda = document.createTextNode(k);
                    } else {
                        celda = document.createTextNode(read(k,moneda,monedas));
                    }
                } catch (e){
                    
                    if (e instanceof TypeError){
                        
                    }
                }

                columna.appendChild(celda);
                fila.appendChild(columna);
            }
        }
        tblBody.appendChild(fila);
    }
    //node.parentNode.removeChild(node);
}


