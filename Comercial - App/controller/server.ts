import express from "express";
import cors from "cors";
import routes from "../view/http/routes";

const app = express();

app.use(cors());
app.use(express.json())
app.use(routes);

app.listen(3000, ()=>{
  console.log("App is running in 3000.");
});