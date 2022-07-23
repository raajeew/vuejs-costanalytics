var express = require('express');
var app = express();
var fs = require("fs");

//======= Kubecost-UI API ================
function apiBuilder(baseRoute,fileBasePath){
    return function addAPI(type,route,fileName){
        switch(type){
            case "GET":
                console.log("Api Added:",baseRoute+"/"+route)
                app.get(baseRoute+"/"+route, function (req, res) {
                    console.log("Handling url %s", req.url)
                    fs.readFile(__dirname + "/"+ fileBasePath +"/" + fileName +".json", 'utf8', function (err, data) {
                        //console.log( data );
                        res.end(data);
                    });
                });
                break;
            default:
                app.get(baseRoute+"/"+route, function (req, res) {
                    console.log("Handling url %s", req.url)
                    fs.readFile(__dirname + "/"+ fileBasePath +"/" + fileName +".json", 'utf8', function (err, data) {
                        //console.log( data );
                        res.end(data);
                    });
                });
        }
        
    };
}
var kubecostAPIBuilder = apiBuilder("/mcapi","/Kubecost-UI_API_contracts");
// Cost Insite
kubecostAPIBuilder("GET","snapshot","snapShotsData");
kubecostAPIBuilder("GET","grouptab","groupTabChioces");
kubecostAPIBuilder("GET","graph","graphData");
kubecostAPIBuilder("GET","filters","filterChioces");
kubecostAPIBuilder("GET","datagrid","dataGridData");
// dashboard
kubecostAPIBuilder("GET","efficiency/cluster","efficiency/cluster");
kubecostAPIBuilder("GET","efficiency/resource","efficiency/resource");
kubecostAPIBuilder("GET","cost","cost/costby");
kubecostAPIBuilder("GET","cost/variation","cost/variation");
kubecostAPIBuilder("GET","cost/monthly","cost/monthly");
kubecostAPIBuilder("GET","insites","insites");
kubecostAPIBuilder("GET","possible-savings","possible-savings");

//=========================================
//           MAIN SERVER
//=========================================
var server = app.listen(4040, function () {

   var host = server.address().address
   var port = server.address().port

   console.log("Feku app listening at http://%s:%s", host, port)
   console.log("API list:\n-----------");
   app._router.stack.forEach(function(r){
    if (r.route && r.route.path){
      console.log(r.route.path)
    }
  })
})

