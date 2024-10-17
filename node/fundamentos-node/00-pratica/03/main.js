const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');

const timeSys = os.uptime();
const uptimeHours = Math.floor(timeSys / 3600);
const uptimeMinutes = Math.floor((timeSys % 3600) / 60);
const uptimeSecs = timeSys % 60;

const freeMemory = (os.freemem() / 1024 ** 3).toFixed(2);

const username = os.userInfo().username;

const pathFileTxt = path.join(__dirname, "log.txt");

const content = `
Nome do usuário: ${username}
Tempo de sistema: ${uptimeHours}:${uptimeMinutes}:${Math.round(uptimeSecs)}
Mémoria RAM livre: ${freeMemory}GB
`

fs.writeFile(pathFileTxt, content, "utf-8", err => {
    if (err) {
        console.error(`Error ao tetar criar/escrever o arquivo: ${err.message}`);
        return;
    }

    console.log("Arquivo criado com sucesso.");
})