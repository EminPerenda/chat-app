import express from "express";
import authRoutes from "./routes/auth.route.js";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import dns from "node:dns";

dns.setServers(["8.8.8.8"]);

dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log("server is running on PORT:" + PORT);
  connectDB();
});
