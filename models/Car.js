const mongoose = require('mongoose');
const CarSchema = new mongoose.Schema({
  nome: String,
  raridade: String,
  hitbox: String,
  ano: Number,
  imagem: String
});
module.exports = mongoose.model('Car', CarSchema, 'Classico');