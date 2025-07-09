import Subscriber from '../models/subscribers.model.js';

export const createSubscriber = async (req, res) => {
  try {
    const subscriber = await Subscriber.create(req.body);
    res.status(201).json(subscriber);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getSubscribers = async (req, res) => {
  try {
    const subscribers = await Subscriber.find();
    res.json(subscribers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};