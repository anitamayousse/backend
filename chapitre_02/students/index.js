const express = require("express");
const app = express();

app.use(express.json());

app.use((req, res, next) => {
	console.log("requête reçu");
	next();
  });

const students = [];

// Routes

app.get("/students", (req, res) => {

	res.send(students);
});

app.post("/students", (req, res) => {
    students.push({
        id: students.length + 1,
		name: req.body.name,
	});
	res.json(students);
});


// Handle errors
app.get("*", (_req, res) => {
	res.status(404).send("Page not found");
});

// Start the server
app.listen(8000, () => {
	console.log("Listening");
});