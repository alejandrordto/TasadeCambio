function genera_tabla() {

    var moneda = document.getElementById("moneda3").value;
    if (!exists(moneda)) {
        var monedas = getList();
        var tabla = document.getElementById("tabla");
        var tblBody = document.createElement("tbody");
        for (var k in monedas) {
            var fila = document.createElement("tr");
            for (var j = 0; j < 2; j++) {
                if (k !== moneda) {
                    var columna = document.createElement("td");
                    var celda;
                    try {
                        if (j == 0) {
                            celda = document.createTextNode(k);
                        } else {
                            celda = document.createTextNode(read(k, moneda, monedas));
                        }
                    } catch (e) {

                        if (e instanceof TypeError) {

                        }
                    }

                    columna.appendChild(celda);
                    fila.appendChild(columna);
                }
            }
            tblBody.appendChild(fila);
        }
        tabla.appendChild(tblBody);
    }
}
function exists(moneda) {
    var temp = document.getElementById("tabla");
    if (temp.getElementsByTagName("tbody").length !== 0) {
        removetag( moneda);
    }
    return (temp.getElementsByTagName("tbody").length !== 0);
}
function removetag(moneda) {
    var monedas = getList();
    var tblBody = document.createElement("tbody");
    for (var k in monedas) {
        var fila = document.createElement("tr");
        for (var j = 0; j < 2; j++) {
            if (k !== moneda) {
                var columna = document.createElement("td");
                var celda;
                try {
                    if (j == 0) {
                        celda = document.createTextNode(k);
                    } else {
                        celda = document.createTextNode(read(k, moneda, monedas));
                    }
                } catch (e) {

                    if (e instanceof TypeError) {

                    }
                }

                columna.appendChild(celda);
                fila.appendChild(columna);
            }
        }
        tblBody.appendChild(fila);
        
        
    }
    var tabla = document.getElementById("tabla");
    var body=tabla.getElementsByTagName("tbody")[0];
    body.parentNode.replaceChild(tblBody,body);
}


