import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import routes from "./routes";
import AppError from "@shared/errors/AppError";
import "@shared/typeorm";

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

//error handler
app.use((error: error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    return res.status(error.StatusCode).json({
      status: "error",
      message: error.message
    })
  }

  return res.status(500).json({
    status:"error",
    message:"Internal server error"
  })
});

app.listen(3000, () => {
  console.log("App is running in port 3000. 🎈");
})
