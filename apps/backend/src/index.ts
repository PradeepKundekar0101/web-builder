import express from "express";
import cors from "cors";
import projectRouter from "./routes/projectRouter.js";
import authRouter from "./routes/authRouter.js";
import cookieParser from "cookie-parser";
import chatRouter from "./routes/chatRoutes.js";

import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "../.env") });
const app = express();

app.use(cors({ origin: ["https://www.getbuild.tech", "https://getbuild.tech"], credentials: true }));
app.use(cookieParser());
app.use(express.json());


app.use("/project", projectRouter);

app.use("/auth", authRouter);

app.use("/api", chatRouter);


app.listen(3001, () => {
    console.log("Server running @:3001")
})

