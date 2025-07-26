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
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Data Transfer Demo</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f4f4f4;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        height: 100vh;
                        margin: 0;
                    }
                    .container {
                        background-color: #fff;
                        padding: 2rem 3rem;
                        border-radius: 8px;
                        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                        text-align: center;
                    }
                    h1 {
                        margin-bottom: 1.5rem;
                        font-size: 1.75rem;
                        color: #333;
                    }
                    input[type="text"] {
                        padding: 0.5rem;
                        width: 100%;
                        max-width: 300px;
                        margin-bottom: 1rem;
                        border: 1px solid #ccc;
                        border-radius: 4px;
                        font-size: 1rem;
                    }
                    button {
                        padding: 0.6rem 1.2rem;
                        background-color: #007BFF;
                        color: white;
                        border: none;
                        border-radius: 4px;
                        cursor: pointer;
                        font-size: 1rem;
                    }
                    button:hover {
                        background-color: #0056b3;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>Send a Message</h1>
                    <form method="POST">
                        <input type="text" name="message" placeholder="Enter message" required />
                        <br />
                        <button type="submit">Send Data</button>
                    </form>
                </div>
            </body>
            </html>
        `);
    }
});

const PORT = 3001;
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
