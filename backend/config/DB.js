import mongoose from 'mongoose';

export const connectDB = async () => {
    console.log(process.env.MONGODB_URL);
    try {
        const response = await mongoose.connect(process.env.MONGODB_URL);
        if (response){
            console.log(`Connected to database: ${response.connection.host}`);
        }
    } catch (error) {
        console.log(`Error connecting to database: ${error}`);
    }
}