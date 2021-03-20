const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");


const app = express();
const PORT = process.env.PORT || 3001;

app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  });

// routes
app.use(require("./routes/html-routes.js"))
app.use(require("./routes/api-routes.js"))

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
