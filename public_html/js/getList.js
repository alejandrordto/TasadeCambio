 function getList()
            {
                var menu = document.getElementById("moneda1");
                var menu2 = document.getElementById("moneda2");
                var menu3 = document.getElementById("moneda3");
                var lista = ["JPY", "USD", "COP", "EUR", "BRL", "CAD", "AUD", "CHF", "GBP"];
                var i;
                for (i = 0; i < lista.length; i++) {
                    menu.options[i] = new Option(lista[i]);
                    menu2.options[i] = new Option(lista[i]);
                    menu3.options[i] = new Option(lista[i]);
                }
                return lista;
            }


