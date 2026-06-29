import express from 'express';
import 'dotenv/config';

const app = express();

app.use(express.json())

app.get('/health', (req, res) => {
    res.status(200).json({
        "status": "ok",
        "environment": process.env.NODE_ENV,
        "uptime": process.uptime()
    })
})

export default app;