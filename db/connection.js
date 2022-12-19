import mongoose from 'mongoose';

mongoose.set("returnOriginal", false);
mongoose.set('strictQuery', true);

let connectionConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

// Connnects locally to mongoDB

mongoose.connect("mongodb://127.0.0.1:27017/apod", connectionConfig).catch((err) => {
    console.log(`Error connection to MongoDB: ${err.message}`)
});

mongoose.connection.on('connected', () => console.log("Connected to database"))
mongoose.connection.on('disconnected', () => console.log("Disconnected from database"))
mongoose.connection.on('error', error=> console.error("Database error", error))

export default mongoose.connection;