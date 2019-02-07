const fs = require('fs');

const lilstTable = (base, limite = 10) => {
    for (let i = 1; i <= limite; i++) {
        let res = i * base
        console.log(`${base} * ${i} = ${res}`);
    }

}

const crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        {
            if (!Number(base)) {
                reject(`El valor introducido ${base} no es un !Número!...`)
                return;
            } else {

                let data = '';

                for (let i = 1; i <= limite; i++) {
                    let res = i * base
                    data = data + `${base} * ${i} = ${res}\n`;
                }

                fs.writeFile(`./tablas/tabla${base}-al-${limite}.txt`, data, (err) => {
                    if (err) reject(err);
                    else
                        resolve(`tabla-${base}-al-${limite}`);
                });
            }
        }
    });
}

module.exports = {
    crearArchivo,
    lilstTable
}