const http = require('http');
const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            console.log('Received data:', body);
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Data received successfully');
        });
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <h1>Data Transfer Demo</h1>  
            <form method="POST">
                <input type="text" name="message" placeholder="Enter message" />
                <button type="submit">Send Data</button>
            </form>
        `);
    }
});
const PORT = 3001;
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});