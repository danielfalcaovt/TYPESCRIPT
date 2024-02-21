import express from "express";
import routes from "./routes/routes.ts";

const port = 3000;
const app = express();

app.use(routes);

app.listen(port, ()=>{
    console.log("App is running in 3000.🤗");
});