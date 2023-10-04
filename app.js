import { crearArchivo } from "./helpers/multiplicar.js";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
const argv = yargs(hideBin(process.argv)).argv;
console.log(process.argv);
console.log(argv);

crearArchivo(11)
  .then((nombreArchivo) => {
    console.log(nombreArchivo);
  })
  .catch((err) => console.log(err));
