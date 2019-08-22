const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const earthquakesSchema = new Schema(
  {
    evid: String,
    fecha: String,
    hora: String,
    latitud: String,
    longitud: String,
    profundidad: String,
    intensidad: String,
    magnitud: String,
    tipoMagnitud: String,
    localizacion: String
    ///coordinates:????
  },
  { timestamps: true }
);

const Earthquakes = mongoose.model("Earthquakes", earthquakesSchema);
module.exports = Earthquakes;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
