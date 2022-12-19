import fetch from 'node-fetch';
import { promises as fsPromises } from 'fs'

fetch("https://api.nasa.gov/planetary/apod?api_key=3GFduAWIBO2cOv1bJy6q120OWxQM7oM64NLxVGSG")
    .then(response => response.json())
    .then(data => { fsPromises.writeFile("../seed/apod.json", JSON.stringify(data))})
    .catch(error = console.error(error))