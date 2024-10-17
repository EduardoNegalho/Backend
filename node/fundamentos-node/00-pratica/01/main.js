const fs = require('node:fs');

async function createFolder(path) {
    fs.mkdir(path, { recursive: true }, err => {
        if (err) {
            console.error(`Erro ao tentar criar a pasta: ${err.message}`);
            return;
        }

        console.log("Pasta criada com sucesso.");
    })
}

async function writeFile(fileName, content) {
    fs.writeFile(`./arquivos/${fileName}`, content, "utf-8", err => {
        if (err) {
            console.error(`Erro ao tentar crair/escrever um arquivo: ${err.message}`);
            return;
        }

        console.log("Arquivo criado/escrito com sucesso.");
    })
}

async function readFile(filePath) {
    const exist = fs.existsSync(filePath);
    if (!exist) {
        console.log("O arquivo não existe neste caminho.");
        return
    }

    fs.readFile(filePath, "utf-8", (err, data) => {
        if (err) {
            console.error(`Erro ao tentar ler um arquivo: ${err.message}`);
            return;
        }

        console.log("Lendo arquivo...");
        console.log(data);
    })
}

async function main() {
    await createFolder('./arquivos');
    await writeFile("log.txt", "Desafio 01 para prática do node.js");
    await readFile('./arquivos/log.txt');
}

main()