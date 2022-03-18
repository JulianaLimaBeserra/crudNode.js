const express = require("express");
// const req = require('express/lib/request');

const server = express();

server.use(express.json());

const cursos = [
  "Filmes",
  "Musica",
  "Livros",
];

// Retorna um curso
server.get("/cursos/:index", (req, res) => {
  const { index } = req.params;

  console.log(index);
  return res.json(cursos[index]);
});

// Retorna todos os cursos
server.get("/cursos", (req, res) => {
  return res.json(cursos);
});

// Criar novo curso
server.post("/cursos", (req, res) => {
  const { name } = req.body;
  cursos.push(name);

  return res.json(cursos);
});

//Atualizzar um curso
server.put("/cursos/:index", (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  cursos[index] = name;

  return res.json(cursos);
});

// Deletar um curso
server.delete("/cursos/:index", (req, res) => {
  const { index } = req.params;

  cursos.splice(index, 1);
  return res.json({ message: "O curso foi deletado" });
});

server.listen(3000);
