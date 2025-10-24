import express from "express";
import cors from "cors";
import { readFileSync } from "fs";

const app = express();
app.use(cors());

// Leer el archivo db.json
const data = JSON.parse(readFileSync("./db.json", "utf8"));

// Endpoint principal
app.get("/products", (req, res) => {
  res.json(data);
});

// Puerto local (opcional)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
