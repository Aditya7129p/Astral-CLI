import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3005;

app.get('/health', (req, res) => {
    res.send("ok");
});

app.listen(port, () => {
    console.log(`Your app is running on http://localhost:${port}`);
});