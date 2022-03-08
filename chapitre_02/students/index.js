const express = require("express");
const app = express();

const students = [
	{
        id: 1,
		name: "Anita",
	},
	{
        id: 2,
		name: "Chi",
	},
	{
        id: 3,
		name: "Lysiane",
	},
	{
        id: 4,
		name: "Pauline",
	},
];

// Routes

app.get("/students", (req, res) => {

	res.send(students);
});

app.post("/students", (req, res) => {
    students.push({
        id: students.length + 1,
		name: req.body.name,
	});
	res.send(students);
});


// Handle errors
app.get("*", (_req, res) => {
	res.status(404).send("Page not found");
});

// Start the server
app.listen(8000, () => {
	console.log("Listening");
});