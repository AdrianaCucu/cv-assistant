import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app: Express = express();
app.use(cors()); // TODO: configure for specific origin
const port = process.env.PORT || 3333;

app.get("/", (req: Request, res: Response) => {
    res.send("server running wooooop");
});

app.get("/banana", (req: Request, res: Response) => {
    res.send({ message: "WHY ARE YOU LOOKING FOR BANANAS" });
});

app.listen(port, () => {
    console.log(`Server running on localhost:${port}`);
});
