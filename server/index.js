import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.js';
import authRouter from './routes/auth.js';

dotenv.config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });


const app = express();
app.use(express.json());

app.listen(5000, ()=>{
    console.log('Server running on port 5000');
})

app.use("/api/user", userRouter)
app.use("/api/auth", authRouter)

app.use((error, req, res, next) => {
    const status = error.statusCode || 500;
    const message = error.message || "Internal Server Error";
    return res.status(status).json({ sucess: false, statusCode, message });
    
})