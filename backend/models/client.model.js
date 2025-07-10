import mongoose, { Schema } from "mongoose";

const clientSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  designation: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String // Will store filename or full path
  }
}, { timestamps: true });

const Client = mongoose.model("Client", clientSchema);
export default Client;
