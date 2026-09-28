import express, { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT:number = Number(process.env.PORT) || 3000;

app.get("/" , (req:Request, res:Response) => {
    res.send("Welcome to project_monaco!");
});

app.get("/birthday", (req:Request, res: Response) => {
    const now = new Date();
    res.send(`Current Date and time: ${now.toString()}`);
    });

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
