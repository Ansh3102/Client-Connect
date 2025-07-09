import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
    fullName:{
        type: String,
        required: true
    },
    email: {
        type: String, 
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
},{timestamps: true});

const Contact =  mongoose.model('Contact' , contactSchema); 
export default Contact; 