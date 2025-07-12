const User = require('../models/user');


const userinformation = async (req, res) => {
  const {  name, email, contact, address} = req.body;
  const user = await User.create({ name, email, contact, address });
  res.status(201).json(user);

}

const getuserinformation = async (req, res) => {
    const users = await User.findAll();
    res.status(200).json(users);
    }

    // const searchuser = async (req, res) => {
    //     const { email } = req.body;
    //     const user = await User.findOne({ where: { email } });
    //     res.status(200).json(user);
    // }

    // const pagination = async (req, res) => {
    //     const { page, limit } = req.body;
    //     const users = await User.findAll({ limit, offset: page });
    //     res.status(200).json(users);
    // }

    module.exports = { userinformation, getuserinformation };