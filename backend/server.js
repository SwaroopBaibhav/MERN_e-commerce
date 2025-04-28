import express from 'express';
import dotenv from 'dotenv';
import router from './route/product.route.js';
import {connectDB} from './config/DB.js';
import cors from 'cors'

dotenv.config();

const app = express();

const port = process.env.PORT;

app.use(express.json());
app.use(cors());

app.use('/products', router)

app.listen(port, () => {
    console.log(`Listening at port ${port}`);
    connectDB();
})