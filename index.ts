
//importing express

import express , { Request, Response } from "express";
import dotenv from "dotenv";

//loading environment variables
dotenv.config();

//creating the express application
const app = express();
const PORT:number = Number(process.env.PORT) || 3000;


//first route, sends a greeting response when a user visits the homepage
app.get("/" , (req:Request, res:Response) => {
    res.send("Welcome to project_monaco!");
});

//second route sends a dynamic birthday response
app.get("/birthday", (req:Request, res: Response) => {
    const now = new Date();
    res.send(`Current Date and time: ${now.toString()}`);
    });

    app.get("/contact" , (req:Request, res:Response) => {
    res.send("Welcome to contact page!");
});

app.get("/store" , (req:Request, res:Response) => {
    res.send("Welcome to contact page!");
});

app.get("/pass" , (req:Request, res:Response) => {
    res.send("Welcome to contact page!");
});




    //the app.listen is compulsory, it helps you run the express server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
