//Import Packages
import express from "express";
import dotenv from "dotenv";

//Import Database Connection
import { connectDB } from "./db/connectDB.js";

//Import Routes
import authRoutes from "./routes/auth.routes.js";

//Configure Environment Variables
dotenv.config();


//Create Express App
const app = express();


//Principal Route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

//Route to handle Auth
app.use("/api/auth", authRoutes);


//Start Server
app.listen(3001, () => {
  connectDB();
  console.log("Server is running on http://localhost:3001");
});
