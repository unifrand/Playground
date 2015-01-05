var connect = require('connect'), serveStatic = require('serve-static');
var app = connect();
app.use(serveStatic("../ProAngularJS/WebContent"));
app.listen(5000);

