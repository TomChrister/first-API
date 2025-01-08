import http from 'http';

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    console.log(req.url);
    res.setHeader('Access-Control-Allow-Origin', '*');

    if (req.method === 'GET') {
        switch (req.url) {
            case '/test':
                res.end('test path');
                break;
            case '/hello':
                res.end('hello path');
                break;
            case '/about path':
                res.end('about path');
                break;
            case '/json':
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ first: 'object' }));
                break;
            default:
                res.end('Hello world');
        }
    } else if (req.method === 'POST') {
        res.end('From post request');

    } else if (req.method === 'PUT') {
        res.appendHeader('Access-Control-Allow-Methods', 'PUT');
        res.end('From put request');

    } else {
        res.end('Something went wrong');
    }

});

server.listen(port, () => {
    console.log('Server started on port: ', port);
});