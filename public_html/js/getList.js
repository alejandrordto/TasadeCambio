 function getList()
            {
                var menu = document.getElementById("moneda1");
                var menu2 = document.getElementById("moneda2");
                var menu3 = document.getElementById("moneda3");
                var url="https://m01pip3dx8.execute-api.us-east-1.amazonaws.com/prod/jsonrates"
                var xmlHttp = new XMLHttpRequest();
                xmlHttp.open("GET", url, false); // false for synchronous request
                xmlHttp.send(null);
                var lista =xmlHttp.responseText;
                lista=JSON.parse(lista)['rates'];
                var i=0;
                for (var k in lista){
                    menu.options[i] = new Option(k);
                    menu2.options[i] = new Option(k);
                    menu3.options[i] = new Option(k);
                    i+=1;
                }
                return lista;
            }
function getvalues()
{
                var url="https://openexchangerates.org/api/latest.json?app_id=5a2f8324b0c64f47b759a8686685b9c1"
                var xmlHttp = new XMLHttpRequest();
                xmlHttp.open("GET", url, false); // false for synchronous request
                xmlHttp.send(null);
                var lista =xmlHttp.responseText;
                lista=JSON.parse(lista)['rates'];
                return lista;
}
