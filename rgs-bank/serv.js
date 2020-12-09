var express = require('express');
var cors = require('cors');
var http = require('http');
var app = express();
var appserver = http.createServer(app);

// const corsOptions = {
//     origin: '*',
//     method: 'GET, POST',
//     allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"],
//     credentials: true
// };
// app.use('/', cors(corsOptions));

const allowCrossDomain = function(req, res, next) {

    var allowedOrigins = ['https://box.srvtests.com', 'http://box.srvtests.com', 'http://127.0.0.1:9091', 'http://localhost:9091', 'http://localhost:9090'];
    var origin = req.headers.origin;

    // if(allowedOrigins.indexOf(origin) > -1){
    //     res.header('Access-Control-Allow-Origin', origin);
    // }

    res.header('Access-Control-Allow-Origin', 'https://box.srvtests.com');
    // res.header('Content-Security-Policy', "default-src *; script-src * data: *;");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
    res.header('Access-Control-Allow-Credentials', 'https://box.srvtests.com');
    res.header('Origin', true);

    return next();
};
app.use(allowCrossDomain);
app.use('/', express.static('./'));


appserver.listen(4000, function() {
    console.log('started on 4000 port');
});


