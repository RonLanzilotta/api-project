import mongoose from "mongoose"

const Schema = mongoose.Schema;

const apodSchema = new Schema({
    "date": Date,
    "explanation": String,
    "title": String,
    "url": String
})

// A simple mongoose model that removes extraneous data from the publicly available NASA data

export default mongoose.model('apod', apodSchema)