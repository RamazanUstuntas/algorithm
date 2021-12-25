const http = require('http');

const server = http.createServer((req, res) => {

    const url = req.url;

    if (url === '/index'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h2>WELCOME TO INDEX PAGE</h2>');
    }

    else if (url === '/about'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h2>WELCOME TO ABOUT PAGE</h2>');
    }

    else if (url === '/contact'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h2>WELCOME TO CONTACT PAGE</h2>');
    }

    else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write("<h2>404 PAGE NOT FOUND!!</h2>");
    }

    console.log("SENDED REQUEST");
    res.end();
});

const port = 5000;

server.listen(5000, () => {
    console.log(`SERVER START ON PORT ${port}`);
})