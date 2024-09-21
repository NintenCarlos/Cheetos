import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import { test } from "./Backend/controllers/alumno.controller.js";

dotenv.config();

mongoose
  .connect(process.env.url_bd)
  .then(() => {
    console.log("Conexión exitosa.");
  })
  .catch(() => {
    console.log("Conexión fallida");
  });

const app = express();
app.use(cors());

app.listen(4002, () => {
  console.log("Se escucha el servidor.");
});

test();