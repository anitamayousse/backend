const express = require("express");
const dotenv = require("dotenv")
dotenv.config({
	path: "/config.env",
});
const { Pool } = require("pg");
console.log(Pool);
const app = express();

const Postgres = new Pool ({ ssl: { rejectUnauthorized: false }});

// Routes
app.get("/",async (_req, res) => {
	const authors = await Postgres.query ("SELECT * FROM authors")
		console.log(res);

	res.json(authors.rows);
});

app.get("/authors/:id", (req, res) => {
	// const author = authors.find((x, index) => {
	// 	const id = index + 1;

	// 	return req.params.id === id.toString();
	// });

	const author = authors[req.params.id - 1];

	res.send(`${author.name}, ${author.nationality}`);
});

app.get("/authors/:id/books", (req, res) => {
	const books = authors[req.params.id - 1].books;
	res.send(books.join(", "));
});

app.get("/json/authors/:id", (req, res) => {
	const author = authors[req.params.id];
	delete author.books;
	res.json(author);
});

app.get("/json/authors/:id/books", (req, res) => {
	const books = authors[req.params.id].books;
	res.json({
		books,
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