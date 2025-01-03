
import express from 'express'; 
import mongoose from 'mongoose'; 
import cors from 'cors'; 
import router from './routes/index.js'; 
import {connectDB} from './config/db.js'; 
import dotenv from 'dotenv'; 
dotenv.config();
const app = express();  
connectDB(); 

app.use(express.json());  
app.use(express.urlencoded({ extended: true }));  

const corsOptions = {
  origin: 'http://localhost:5173', 
  credentials: true, 
};
app.use(cors(corsOptions));  

app.use('/api/', router);  

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

