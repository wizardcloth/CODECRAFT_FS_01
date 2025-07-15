import express from "express";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import authRoutes from "./Routes/authRoute.js";
import Cors from 'cors';

import users from "./Routes/getUsers.js"

const app = express();

dotenv.config();

//middleware
app.use(express.json());
import initMiddleware from './middleware/init.middleware.js'; // helper you must create

const cors = initMiddleware(
    Cors({
        origin: "https://codecraft-fs-01-pai2.vercel.app",
        methods: ["GET", "POST", "OPTIONS", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);

app.options("*", cors());

//routes

app.use("/api/auth", authRoutes);
app.use("/api/users", users);


app.get("/", (req, res) => res.send("Serverless Express API"));

// app.listen(3000, async () => {
// await connectDB();
//     console.log("Server is running on port 3000");
// });

export default async function handler(req, res) {
    await cors(req, res);
    await connectDB();
    app(req, res);
}
