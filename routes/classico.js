var express = require('express');
var router = express.Router();
const Car = require('../models/Car');

router.get('/', async function(req, res, next) {
  const carros = await Car.find();
  console.log(carros);
  const randomIndex = Math.floor(Math.random() * carros.length);
  const carroResposta = carros[randomIndex];
  res.render('classico', { title: 'Classico', carros, carroResposta });
});

router.get('/search', async function(req, res, next) {
  const { q } = req.query;  
  if (!q) return res.json([]);
  const carros = await Car.find({ nome: { $regex: q, $options: 'i' } });
  res.json(carros);
});

module.exports = router;