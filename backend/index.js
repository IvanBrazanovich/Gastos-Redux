const express = require("express");
const cors = require("cors");
const bp = require("body-parser");

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const app = express();

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
  })
);

app.get("/gastos", async (req, res) => {
  const respuesta = await prisma.gasto.findMany();

  res.json(respuesta);
});

app.put("/gastos", async (req, res) => {
  const respuesta = await prisma.gasto.update({
    where: {
      id: req.body.id,
    },
    data: {
      nombre: req.body.nombre,
      cantidad: req.body.cantidad,
      categoria: req.body.categoria,
    },
  });
  res.json(respuesta);
});

app.post("/gastos", async (req, res) => {
  try {
    const respuesta = await prisma.gasto.create({
      data: {
        nombre: req.body.nombre,
        cantidad: req.body.cantidad,
        categoria: req.body.categoria,
      },
    });

    res.json(respuesta);
  } catch (err) {
    res.status(400).json("Problemón");
  }
});

app.delete("/gastos", async (req, res) => {
  const respuesta = await prisma.gasto.delete({
    where: {
      id: req.body.id,
    },
  });

  res.json(respuesta);
});

app.delete("/gastosall", async (req, res) => {
  const respuesta = await prisma.gasto.deleteMany({});

  res.json(respuesta);
});

app.listen(4000);
