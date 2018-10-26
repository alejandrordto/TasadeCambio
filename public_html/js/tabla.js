function genera_tabla() {
   var moneda = document.getElementById("moneda3").value;
    var monedas = getList();    
    var body = document.getElementsByTagName("body")[0];
    var tabla = document.createElement("table");
    var tblBody = document.createElement("tbody");
    for (var i = 0; i < monedas.length-1; i++) {
        var fila = document.createElement("tr");
        for (var j = 0; j < 2; j++) {
            if (monedas[i] != moneda) {
                var columna = document.createElement("td");
                var celda;
                if (j == 0) {
                    celda = document.createTextNode(monedas[i]);
                } else {
                    celda = document.createTextNode(read(monedas[i], moneda));
                }
                columna.appendChild(celda);
                fila.appendChild(columna);
            }
        }
        tblBody.appendChild(fila);
    }
    tabla.appendChild(tblBody);
    body.appendChild(tabla);
    tabla.setAttribute("border", "2");
}
function read(moneda1, moneda2) {
    url = "https://www.alphavantage.co/query?function=FX_INTRADAY&from_symbol=" + moneda1 + "&to_symbol=" + moneda2+"&interval=5min&apikey=Y47LUWHBZVHYZWEG";
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, false); // false for synchronous request
    xmlHttp.send(null);
    var lista = xmlHttp.responseText;
    lista = lista.split("\n");
    var value = lista[15];
    value = value.split(":");
    value = value[1];
    var bal = value.substr(2, value.length - 3);
    bal = parseFloat(bal);
    return bal;
}
