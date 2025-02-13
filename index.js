import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Route from "./routes/route.js"
import { DATABASE } from "./config.js";

const app = express();
app.use(cors());
app.use(express.json());


try {
    mongoose.connect(DATABASE);
    console.log("Database Connected");
  } catch (err) {
    console.log("error:", err);
  }
  
  
  

// MongoDB connection
// const DB_URI = 'mongodb+srv://Rohit:foujdar@123@copper.dasrd.mongodb.net/?retryWrites=true&w=majority&appName=Copper';

// mongoose
//   .connect(DB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log('MongoDB connected successfully'))
//   .catch((err) => console.error('Error connecting to MongoDB:', err));

// // Mongoose Schema and Model



// // Routes

// // Get all todos


// Start server
app.use("/", Route);

app.listen(8000, () => {
    console.log("listening on port : 8000");
  });