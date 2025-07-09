import mongoose, { Schema } from "mongoose";

const clientSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
},{timestamps: true});

const Client =  mongoose.model('Client' , clientSchema); 

export default Client;