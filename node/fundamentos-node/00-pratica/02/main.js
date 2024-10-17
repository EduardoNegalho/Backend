const path = require('node:path');
const os = require('node:os');
const fs = require('node:fs');

const tmpdir = os.tmpdir();

fs.readdir(tmpdir, 'utf-8', (err, files) => {
    if (err) {
        console.error(`Erro ao tentar ler o diretório: ${err.message}`);
        return;
    }

    files.forEach(file => {
        const ext = path.extname(file);
        console.log(`Nome: ${file} - Extensão: ${ext}`);
    })
})