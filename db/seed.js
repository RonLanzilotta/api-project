import mongoose from 'mongoose';
import connection from './connection.js';
import data from "../apod.json" assert { type: 'json' }
import Apod from '../models/Apod.js';

// Organizes data from the raw JSON file into something that our mongoose schema will recognize.

let apodData = data.map(item => {
    const apod = {}

    apod.date = item.date
    apod.explanation = item.explanation
    apod.url = item.url
    apod.title = item.title
    return apod
})

// Seeds our db with the newly formatted data.

Apod
    .deleteMany({})
    .then(() => Apod.create(apodData))
    .then(() => console.log('done! apod data created!'))
    .then(() => mongoose.disconnect())
    .catch(error => console.error('ERROR!', error))