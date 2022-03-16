const express = require("express");
const app = express();
const cors = require('cors');

const students = require('./data');

app.use(express.json());

app.use((req, res, next) => {
	console.log("requête reçu");
	next();
  });

  app.use(cors())
// Routes

app.get("/students", (req, res) => {

	res.send(students);
});

app.post("/students", (req, res) => {

    console.log("name(s): ", req.body.Name);
    
    //Creating a loop to push every name added to the post method;
    for (let i = 0; i < req.body.Name.length; i++) {
        students.push(req.body.Name[i]);   
    }
    console.log(students);
});


// Handle errors
app.get("*", (_req, res) => {
	res.status(404).send("Page not found");
});

// Start the server
app.listen(8000, () => {
	console.log("Listening");
});