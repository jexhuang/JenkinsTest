var http = require("http");
var url = require("url");

function startServer(route,handle){
  http.createServer(function(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    route(pathname,handle,response);
  }).listen(8888);
  console.log('server is start and waiting for request ....');
}

exports.start = startServer;
