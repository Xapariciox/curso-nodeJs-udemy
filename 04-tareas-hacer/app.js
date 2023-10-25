import * as colors from "colors";
import { mostarMenu, pausa } from "./helpers/mensajes.js";
console.clear();

const main = async () => {
  console.log("Hola Mundo");

  let opt = "";

  do {
    opt = await mostarMenu();
    console.log({ opt });

    if (opt !== "0") await pausa();
  } while (opt !== "0");

  // pausa();
};

main();
