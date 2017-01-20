var server = require("./server.js");
var router = require("./route.js");
var handler = require("./handler.js");
server.start(router.route,handler.handle);
