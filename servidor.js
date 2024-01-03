// Servidor
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/informacoes-fruta/:fruta', (req, res) => {
  const fruta = req.params.fruta;
  const informacoesFruta = {
    nome: fruta,
    cor: 'vermelha',
    preco: '2.50'
  };
  res.json(informacoesFruta);
});

app.listen(PORT, () => {
  console.log(`Servidor está ouvindo na porta ${PORT}`);
});