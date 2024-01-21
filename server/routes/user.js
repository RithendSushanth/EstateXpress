import express from 'express';
import { test } from '../controllers/user.js';

const router = express.Router();

router.get('/test', (req,res)=>{
    res.send('Welcome to user route');
});

export default router;