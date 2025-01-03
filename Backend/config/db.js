import mongoose from "mongoose";
export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://sakshichauhan1:dE1GBHuiixNgMEZF@cluster0.v6fwe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("DB connected successfully");
    } catch (error) {
        console.error("Error connecting to the database:", error.message);
        process.exit(1); 
    }
};



//dE1GBHuiixNgMEZF