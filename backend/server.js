const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
app.use(express.json());

//DB URI
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully.");
})

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
const memesRouter = require('./routes/meme');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);
app.use('/meme', memesRouter);
app.use(express.static(__dirname + "/public"));
app.use("/uploads", express.static("uploads"));

const port = process.env.PORT;
app.listen(port || 3001, () => {
    console.log(`Server is running on port: ${port}`);
});

