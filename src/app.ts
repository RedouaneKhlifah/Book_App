import express from "express";
import dotenv from "dotenv";
import cors from "cors";

// import utiles
import "./utils/index";
// imported routes

// imported error middlewares
import { errorHandler, notFound } from "./middlewares/errorMiddleware";

dotenv.config();


const app = express();

app.use(
    cors({
        origin: "http://localhost:5173"
    })
);

// handel data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// use error Middlewares
app.use(notFound);
app.use(errorHandler);

export default app;
