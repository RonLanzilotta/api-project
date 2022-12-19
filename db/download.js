import fetch from 'node-fetch';
import { promises as fsPromises } from 'fs'


fetch("https://api.nasa.gov/planetary/apod?api_key=3GFduAWIBO2cOv1bJy6q120OWxQM7oM64NLxVGSG&start_date=2022-11-30&end_date=2022-12-19")
    .then(response => response.json())
    .then(data => { fsPromises.writeFile("./apod.json", JSON.stringify(data))})
    .then(console.log('json created'))
    .catch(error => console.error(error))