import express from "express";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import authRoutes from "./Routes/authRoute.js";
import cors from "cors";

const app = express();

dotenv.config();    

//middleware
app.use(express.json());
app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
        ACCESS_CONTROL_ALLOW_ORIGIN: "*",
    })
);

//routes

app.use("/api/auth", authRoutes);


app.get("/", (req, res) => res.send("Serverless Express API"));

app.listen(3000, async () => {
await connectDB();
    console.log("Server is running on port 3000");
});

