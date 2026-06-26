const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8000;
const PUBLIC_DIR = path.resolve(__dirname, '..');

const MIME_TYPES = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.pdf': 'application/pdf'
};

const server = http.createServer((req, res) => {
    console.log(`[REQUEST] ${req.method} ${req.url}`);
    
    // Decode the URL path to match local filesystem paths
    let decodedUrl = '';
    try {
        decodedUrl = decodeURIComponent(req.url);
    } catch (e) {
        console.error(`[ERROR] Failed to decode URL: ${req.url}`, e);
        res.statusCode = 400;
        res.end('Bad Request');
        return;
    }

    // Resolve file path
    const filePath = path.join(PUBLIC_DIR, decodedUrl.split('?')[0]);
    
    // Prevent directory traversal
    if (!filePath.startsWith(PUBLIC_DIR)) {
        console.warn(`[WARNING] Access denied (Traversal attempt): ${filePath}`);
        res.statusCode = 403;
        res.end('Forbidden');
        return;
    }

    function serveFile(fPath) {
        const ext = path.extname(fPath).toLowerCase();
        const contentType = MIME_TYPES[ext] || 'application/octet-stream';
        
        res.writeHead(200, { 'Content-Type': contentType });
        const stream = fs.createReadStream(fPath);
        stream.on('error', (streamErr) => {
            console.error(`[STREAM ERROR] ${fPath}`, streamErr);
            if (!res.headersSent) {
                res.statusCode = 500;
                res.end('Internal Server Error');
            }
        });
        stream.pipe(res);
    }

    fs.stat(filePath, (err, stats) => {
        if (!err && stats.isDirectory()) {
            const indexPath = path.join(filePath, 'index.html');
            fs.stat(indexPath, (err2, stats2) => {
                if (err2 || !stats2.isFile()) {
                    console.warn(`[NOT FOUND] ${indexPath}`);
                    res.statusCode = 404;
                    res.end('File Not Found');
                    return;
                }
                serveFile(indexPath);
            });
            return;
        }

        if (err || !stats.isFile()) {
            console.warn(`[NOT FOUND] ${filePath}`);
            res.statusCode = 404;
            res.end('File Not Found');
            return;
        }

        serveFile(filePath);
    });
});

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
    console.log(`Serving files from ${PUBLIC_DIR}`);
});
