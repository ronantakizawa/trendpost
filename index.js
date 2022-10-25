import express from "express";
import userRoutes from "./api.js";

//You need insomnia because browsers only accept GET Requests
const app = express();

const PORT = 8080;


//Listen on the port
//req=request, res=response

//Make express parse data
app.use( express.json() );

app.use("/",userRoutes)

app.listen(
    PORT,
    () => console.log("LIVE")
)