import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'

const app = express(); 

const PORT = 3000 || process.env.PORT; 
app.use(cors()); 

app.get('/',(req,res)=>{
    res.send('App is running'); 
});

app.listen(PORT , ()=>{
    console.log(`Server running on ${PORT}`); 
})

