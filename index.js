import express from "express";
import connection from "./db/connection.js";
import Apod from "./models/Apod.js";
import cors from "cors"

const app = express(); // Establishes an instance of express
const PORT = process.env.PORT || 3000;

app.use(cors())

app.listen(PORT, () => {
  console.log("Listening on 3000"); // Assigns this project to port 3000
});
app.use(express.json());

app.get("/", (req, res) => {
  if (process.env.PORT) {
    res.redirect("https://api-project-production-6021.up.railway.app/apod"); // Redirects our root URI path to /apod
  } else {
    res.redirect("http://localhost:3000/apod"); // Redirects our root URI path to /apod
  }
});


app.get("/apod", async (req, res) => {
  const apod = await Apod.find({}); // *READ* response prints all items in the database.
  res.json(apod);
});

// *READ* response prints a specific item in db which client requests by date.
app.get("/apod/:date", async (req, res) => {
  const apodByDate = await Apod.find({ date: req.params.date });
  res.json(apodByDate); // date must be YYYY-MM-DD format, between 11/30/22 - 12/19/22 range
});

app.post("/apod/newApod", async (req, res) => {
  Apod.create(req.body).then((newApod) => {
    // *CREATE* Add an entry to the db. Refer to NASA API for data.
    res.json(newApod);
  });
});

app.put("/apod/:id", async (req, res) => {
  Apod.findByIdAndUpdate(
    // *UPDATE* Find a specific entry by ID and update based on the body.
    req.params.id,
    req.body,
    { new: true }
  ).then((updatedApod) => {
    res.json(updatedApod);
  });
});

app.delete("/apod/:date", async (req, res) => {
  Apod.findOneAndDelete({ date: req.params.date }).then((deletedApod) => {
    // *DELETE* Search for and remove a specific entry from db by date.
    res.json(deletedApod);
  });
});
