const http = require('http')
const memoria = require('./memoria.js');  // Use a sintaxe CommonJS para importar

const server = http.createServer((req, res) => {
    let url = req.url;
    if (url === "/starts") {
        // Converte JSON para string com null como replacer e dois espaços na identação
        res.end(JSON.stringify(memoria.stats, null, 2));
    } else {
        res.write("<h1>Working</h1>"); // Escreve uma resposta
        res.end();
    }
});

server.listen(3000);
