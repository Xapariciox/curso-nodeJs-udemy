import fs from "node:fs";

export const crearArchivo = (base = 5) => {
  return new Promise((resolve, reject) => {
    let salida = "";
    for (let index = 0; index < 11; index++) {
      salida += `${base} x ${index} = ${base * index}\n`;
    }

    fs.writeFile(`./salida/tabla-${base}.txt`, salida, (err) => {
      if (err) {
        reject(err);
      }
      resolve(`tabla-${base} creada`);
    });
  });
};
