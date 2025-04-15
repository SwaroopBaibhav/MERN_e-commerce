import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productRoutes from './routes/products.route.js'

dotenv.config();

const app = express();

app.use(express.json()) // this is a iddleware, which converts the body to json format

const port = process.env.port;

app.use('/products', productRoutes);

app.listen(port, () => {
    connectDB();
    console.log(`Listening to port ${port}`);
});