import User from "../models/User.js";

export const main = (req, res) => {
  const hello = "hello";
  res.send(hello);
};

export const createUser = async (req, res) => {
  try {
    const {
      nome,
      sobrenome,
      endereco,
      cep,
      rua,
      cidade,
      uf,
      bairro,
      numero,
      complemento,
      profissao,
    } = req.body;

    const newUser = new User({
      nome,
      sobrenome,
      endereco,
      cep,
      rua,
      cidade,
      uf,
      bairro,
      numero,
      complemento,
      profissao,
    });

    const savedUser = await newUser.save();

    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getUsers = async (req, res) => {
  const findUsers = await User.find();

  res.status(200).json(findUsers);
};

export const findUser = async (req, res) => {
  const findUser = await User.findById({ _id: req.params._id });

  res.status(200).json(findUser);
};

export const updateUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params._id, {
    nome: req.body.nome,
    sobrenome: req.body.sobrenome,
    endereco: req.body.endereco,
    cep: req.body.cep,
    rua: req.body.rua,
    cidade: req.body.cidade,
    uf: req.body.uf,
    bairro: req.body.bairro,
    numero: req.body.numero,
    complemento: req.body.complemento,
    profissao: req.body.profissao,
  });

  return res.status(200).json(user);
};

export const deleteUser = async (req, res) => {
  const findUser = await User.findByIdAndDelete({ _id: req.params._id });

  return res.status(200).json(findUser);
};
