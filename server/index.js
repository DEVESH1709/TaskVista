import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import { errorHandler, routeNotFound } from "./middlewares/errorMiddlewaves.js";
import routes from "./routes/index.js";
import { dbConnection } from "./utils/index.js";
import path from "path"
dotenv.config();

dbConnection();

const PORT = process.env.PORT || 5000;

const app = express();

const _dirname =path.resolve();




app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(morgan("dev"));
app.use("/api", routes);

app.use(routeNotFound);
app.use(errorHandler);

app.use(express.static(path.join(_dirname,"/client/dist")));

app.get('*',(req,res=>{
  res.sendFile(path.resolve(_dirname,"client","dist","index.html"));
}))

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));