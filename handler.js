var handle ={};
handle['/index']=index;
handle['/']=home;

function home(response){
    console.log('home page is called')
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("this is home page");
    response.end();
}

function index(response){
    console.log('index page is called')
    sleep(3000,function(){
      response.writeHead(200, {"Content-Type": "text/plain"});
      response.write("this is index page");
      response.end();
    });
}

function sleep(milliSeconds,callback) {
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + milliSeconds);
    callback();
}


exports.handle = handle;
