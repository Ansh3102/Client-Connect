import Client from "../models/client.model.js";

export const createClient = async (req, res) => {
  try {
    const { name, description, designation } = req.body;
    const image = req.file?.filename || '';

    const client = await Client.create({
      name,
      description,
      designation,
      image,
    });

    res.status(201).json(client);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getClients = async (req, res) => {
  try {
    const clients = await Client.find();
    res.json(clients);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
