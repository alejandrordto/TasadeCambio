function getapi() {
    var apigClient = apigClientFactory.newClient();
    var params = {
    };
    var body = {
    };
    var additionalParams = {
        headers: {
            "Accept": "*/*",
            "Authorizacion": "",
            "content-type": "application/json; charset=UTF-8"
        },
        queryParams: {
        }
    };
    apigClient.jsonratesGet(params,body,additionalParams)
    .then(function(result){
        console.log(result);
    }).catch( function(result){
        console.log("error");
    });
}
