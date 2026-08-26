import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("DB CONNECTED");
    } catch (error) {
        console.log("DB CONNECTION ERROR:", error.message);
    }
};