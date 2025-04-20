import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://justintylerrosado:o0q3zi7sPmzI8cin@cluster0.ggheoj2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
export default mongoose.connection;
