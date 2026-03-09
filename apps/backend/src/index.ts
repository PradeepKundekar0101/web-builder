import express from "express";
import cors from "cors";
import projectRouter from "./routes/projectRouter.js";
import authRouter from "./routes/authRouter.js";
import cookieParser from "cookie-parser";
import { tr } from "zod/locales";
import chatRouter from "./routes/chatRoutes.js";

import dotenv from "dotenv";
dotenv.config();
const app = express();

app.use(cors({ origin: "*" }));
app.use(cookieParser());
app.use(express.json());


app.use("/project", projectRouter);

app.use("/auth", authRouter);

app.use("/api", chatRouter);


app.listen(3001, () => {
    console.log("Server running @:3001")
})

