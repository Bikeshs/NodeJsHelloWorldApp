var http = require('http');
http.createServer(function (request, response) {
    // Send the HTTP header
    // HTTP Status: 200 : OK 
    // Content Type: text/plain
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    // Send the response body as "Hello World“
    var empObj = {
        FirstName: 'Bikesh',
        LastName: 'Srivastava',
        MobileNo: 8802592478
    } //to return json data
    response.end(JSON.stringify(empObj));
    //response.end("Hello World");
}).listen(8081);
// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');
