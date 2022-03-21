const express = require("express");
const dotenv = require("dotenv")
dotenv.config({
	path: "./config.env",
});
const { Pool } = require("pg");
console.log(Pool);
const app = express();
const Postgres = new Pool ({ ssl: { rejectUnauthorized: false }});
const cors = require('cors');

app.use(express.json());

app.use((req, res, next) => {
	console.log("requête reçu");
	next();
  });

  app.use(cors())
// Routes
//get with SQL
app.get("/",async (_req, res) => {
	const students = await Postgres.query ("SELECT * FROM students")
		console.log(res);

	res.json(students.rows);
});

//Post with SQL
app.post("/students", async(req, res) => {

	try {
		await Postgres.query(
			"INSERT INTO students(name) VALUES($1)",
			[req.body.name]
		);
	} catch (err) {
		return res.status(400).json({
			message: "An error happened. Bad data received.",
		});
	}

	res.json({
		message: `Student ${req.body.name} added to the database`,
	});
});


// Handle errors
app.get("*", (_req, res) => {
	res.status(404).send("Page not found");
});

// Start the server
app.listen(8000, () => {
	console.log("Listening");
});