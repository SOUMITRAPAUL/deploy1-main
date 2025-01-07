import cors from 'cors';
import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

const corsOptions = {
    origin: '*',
    credentials: true, 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
    try {
        res.send('Hello World abc'); 
    } catch (err) {
        console.error("Error handling request:", err);
        res.status(500).send('Something went wrong');
    }
});

export default app;
