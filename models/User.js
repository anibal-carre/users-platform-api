import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  /*
    nome
    sobrenome
    endereco
    cep
    rua
    cidade
    uf
    bairro
    numero
    complemento
    profissao
    
    */

  nome: {
    type: String,
    required: true,
    min: 2,
    max: 50,
  },
  sobrenome: {
    type: String,
    required: true,
    min: 2,
    max: 50,
  },
  endereco: {
    type: String,
    required: true,
    min: 2,
    max: 50,
  },
  cep: {
    type: Number,
    required: true,
  },
  rua: {
    type: String,
    required: true,
    min: 2,
    max: 50,
  },
  cidade: {
    type: String,
    required: true,
    min: 2,
    max: 50,
  },
  uf: {
    type: String,
    required: true,
    min: 2,
    max: 50,
  },
  bairro: {
    type: String,
    required: true,
    min: 2,
    max: 50,
  },
  numero: {
    type: Number,
    required: true,
  },
  complemento: {
    type: String,
    required: true,
    min: 2,
    max: 50,
  },
  profissao: {
    type: String,
    required: true,
    min: 2,
    max: 50,
  },
});

const User = mongoose.model("User", UserSchema);
export default User;
