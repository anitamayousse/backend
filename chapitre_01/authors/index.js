const express = require("express");
const dotenv = require("dotenv")
dotenv.config({
	path: "./config.env",
});
const { Pool } = require("pg");
const { bool } = require("joi");
console.log(Pool);
const app = express();

const Postgres = new Pool ({ ssl: { rejectUnauthorized: false }});

// Routes

//with SQL
app.get("/",async (_req, res) => {
	const authors = await Postgres.query ("SELECT * FROM authors")
		console.log(res);

	res.json(authors.rows);
});
//with SQL
app.get("/authors/:id", async (req, res) => {
	let authors;
	try {
		authors = await Postgres.query("SELECT * FROM authors WHERE authors.id=$1", [req.params.id]);
	} catch (err) {
		console.error(err);
		return res.status(400).json({
			message: "Erorr: Please enter a number",
		});
	}
	res.json(authors.rows);
});
//with SQL
app.get("/authors/:id/books", async (req, res) => {
	let books;
	try {
		books = await Postgres.query("SELECT books FROM authors WHERE authors.id=$1", [req.params.id]);
	} catch (err) {
		console.error(err);
		return res.status(400).json({
			message: "Erorr: Please enter a number",
		});
	}
	res.json(books.rows);
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