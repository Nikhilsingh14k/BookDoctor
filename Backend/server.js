import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './config/mongodb.js'; // Importing the connectDB function
import connectCloudinary from './config/cloudinary.js';
import adminRouter from './routes/adminRoutes.js';

dotenv.config(); // Load environment variables from .env file

const uri = process.env.MONGODB_URL; // Get MongoDB connection string from environment variables

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectDB(uri); // Pass the MongoDB URI to the connectDB function
connectCloudinary()


app.use('/api/admin',adminRouter)


app.get('/', (req, res) => {
  res.send('API WORKING');
});

app.listen(port, () => console.log(`Server started on port ${port}`));
