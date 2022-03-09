const express = require("express");
const app = express();

app.use(express.json());

app.use(function (req, res, next) {
    console.log("Je fais un console.log à chaque requête", new Date().toDateString());
    next(); // call the next function to execute the following routes
    // if removed, the next route never fires
  });

// routers
const usersRouter = require("./usersRouter");

app.use(express.json());
app.use("/users", usersRouter);

app.use("*", (err, req, res, next) => {
	res.send("errror");
});

app.listen(8000, () => console.log("Listening..."));