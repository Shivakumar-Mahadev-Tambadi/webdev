const http = require('http')

const server = http.createServer((req, res) =>{
    if(req.url === '/'){
        res.end('<h1>Home page</h1>');
    }
    else if(req.url === '/Contacts'){
        res.end('<h1>Contacts page</h1>');
    }
    else{
        res.end('<h1>404 Not Found</h1>');

    }
    console.log('A new request received.');
});

server.listen(8000,'127.0.0.1',()=>{
    console.log('Server has started.')
})