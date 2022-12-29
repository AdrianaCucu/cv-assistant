import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";

import { sendMessage } from "./chatgptClient";

dotenv.config();

const app: Express = express();
app.use(cors()); // TODO: configure for specific origin
const port = process.env.PORT || 8080;

// TODO: endpoint for ChatGPT interaction
// TODO: try to just call the function without catching
// TODO: update to try-catch to send user useful message

app.get("/", (req: Request, res: Response) => {
    res.send("server running wooooop");
});

app.get("/banana", async (req: Request, res: Response, next) => {
    try {
        const result = await sendMessage();
        res.send({ message: result });
    } catch (err) {
        const error = err as Error;
        res.status(500).send({ message: error.message});
    }
});

app.listen(port, () => {
    console.log(`Server running on localhost:${port}`);
});
