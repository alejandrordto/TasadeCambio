function getVarsUrl()
            {
                var numero = document.getElementById("num");
                var moneda1 =document.getElementById("moneda1");
                var moneda2 =document.getElementById("moneda2");
                url = "https://www.alphavantage.co/query?function=FX_INTRADAY&from_symbol="+moneda1.value+"&to_symbol="+moneda2.value+"&interval=5min&apikey=Y47LUWHBZVHYZWEG";
                var xmlHttp = new XMLHttpRequest();
                xmlHttp.open("GET", url, false); // false for synchronous request
                xmlHttp.send(null);
                var lista =xmlHttp.responseText;
                lista=lista.split("\n");
                var value=lista[15];
                value=value.split(":");
                value=value[1];
                var bal=value.substr(2,value.length-3);
                bal=parseFloat(bal*(parseInt(numero.value)));
                document.getElementById("result").value = bal;
            }

