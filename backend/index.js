//Import Packages
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

//Import Database Connection
import { connectDB } from "./db/connectDB.js";

//Import Routes
import authRoutes from "./routes/auth.routes.js";

//Configure Environment Variables
dotenv.config();


//Create Express App
const app = express();

//Allow Express to parse JSON
app.use(express.json());

//Allow Express to parse Cookies
app.use(cookieParser());

//Route to handle Auth
app.use("/api/auth", authRoutes);


//Start Server
app.listen(3001, () => {
  connectDB();
  console.log("Server is running on http://localhost:3001");
});
