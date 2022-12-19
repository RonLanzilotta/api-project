import express from 'express';
import connection from './db/connection.js';
import Apod from './models/Apod.js';

const app = express();

app.listen(3000, () => {
    console.log('Listening on 3000')
});
app.use(express.json());

app.get("/", (req, res) => {
    res.redirect("http://localhost:3000/apod")
});

app.get("/apod", async (req, res) => {
    const apod = await Apod.find({});
    res.json(apod);
});

app.get("/apod/:date", async (req, res) => {
    //date must be YYYY-MM-DD format, between 11/30/22 -- 12/19/22 range
    const apodByDate = await Apod.find({ date: req.params.date });
    res.json(apodByDate);
})