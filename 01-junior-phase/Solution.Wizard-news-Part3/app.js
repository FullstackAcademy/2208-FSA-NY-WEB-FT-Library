const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({extended: false}))

app.use("/posts", require("./routes/posts"));

app.get("/", (req, res) => {
  res.redirect("/posts");
})

// Error Handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
