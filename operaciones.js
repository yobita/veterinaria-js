const fs = require("fs");

const ruta = require("path");

const RUTA_CITAS = ruta.join(__dirname, "citas.json");

const registrar = (nombre, edad, tipo, color, enfermedad) => {

  const registros = fs.readFileSync(RUTA_CITAS, "utf8");
  const citas = JSON.parse(registros);

  const agregarCita = { nombre, edad, tipo, color, enfermedad };

  citas.push(agregarCita);

  fs.writeFileSync(RUTA_CITAS, JSON.stringify(citas, null, 2), "utf8");

  console.log("Cita registrada:", agregarCita);
};

const leer = () => {
  const registros = fs.readFileSync(RUTA_CITAS, "utf8");
  const citas = JSON.parse(registros);

  console.log("Citas registradas:");
  console.log(citas);
};

module.exports = { registrar, leer };
