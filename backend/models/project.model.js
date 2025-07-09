import mongoose, { Schema } from "mongoose";

const projectSchema = new Schema({
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

const Project =  mongoose.model('project' , projectSchema); 


export default Project; 