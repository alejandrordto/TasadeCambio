function getVarsUrl()
{
    var numero = document.getElementById("num");
    var moneda1 = document.getElementById("moneda1");
    var moneda2 = document.getElementById("moneda2");
    var lista = getvalues();
    var tasa1;
    var tasa2;
    var flag = false;
    if (moneda1.value === '"USD"') {
        flag = true;
    }
    for (var x in lista) {
        if (x === moneda1.value) {
            tasa1 = parseFloat(lista[x]);
        }
        if (x === moneda2.value) {
            tasa2 = parseFloat(lista[x]);
        }
    }
    var bal;
    if (flag) {
        bal = tasa2 * numero.value;
    } else {
        var temp=(1/tasa1)*tasa2;
        bal = temp*numero.value;
    }
    document.getElementById("result").value = bal;
}
function read(moneda1,moneda2,lista){
    var val;
    if (moneda1.value === '"USD"') {
        val=parseFloat(lista[moneda2]);
    } else{
        val=(1/parseFloat(lista[moneda1])*parseFloat(lista[moneda2]));
    }
    return val;
}
