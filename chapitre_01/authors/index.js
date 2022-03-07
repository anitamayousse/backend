const express = require("express");
const app = express();

var authors = [
    {
        name: "Lawrence Nowell",
        nationality: "UK",
        books: ["Beowulf"]
    },
    {
        name: "William Shakespeare",
        nationality: "UK",
        books: ["Hamlet", "Othello", "Romeo and Juliet", "MacBeth"]
    },
    {
        name: "Charles Dickens",
        nationality: "US",
        books: ["Oliver Twist", "A Christmas Carol"]
    },
    {
        name: "Oscar Wilde",
        nationality: "UK",
        books: ["The Picture of Dorian Gray", "The Importance of Being Earnest"]
    },
]

//ex-01
app.get("/", (req, res) => {
	res.send("Authors API");
});
//ex-02
app.get("/authors/1/", (req, res) => {
	res.send("Lawrence Nowell, UK");
});

app.get("/authors/2/", (req, res) => {
	res.send("William Shakespeare, UK");
});

app.get("/authors/3/", (req, res) => {
	res.send("Charles Dickens, US");
});

app.get("/authors/4/", (req, res) => {
	res.send("Oscar Wilde, UK");
});
//ex-03
app.get("/authors/1/books/", (req, res) => {
	res.send("Beowulf");
});

app.get("/authors/2/books/", (req, res) => {
	res.send("/authors/2/books/");
});

app.get("/authors/3/books/", (req, res) => {
	res.send("Oliver Twist, A Christmas Carol");
});

app.get("/authors/4/books/", (req, res) => {
	res.send("Oliver Twist, A Christmas Carol");
});
//ex-04


app.get('/json/authors/:id', (req, res) => {

    const author = authors[parseInt(req.params.id)];

    if (!author) {
        return res.json({message :
             "Book not found!",})
    }

    res.json({
        books : author.books
    });
})


app.get('/json/authors/:id/books', (req, res) => {
    

    const author = authors[parseInt(req.params.id)];

    if (!author) {
        return res.json({message : 
            "Book not found",})
    }

    res.json({
        books : author.books
    });
})


app.get('*', (req,res) => {

    res.json({message : '404 NOT FOUND'})
})

app.get("*", (req, res) => {
	res.send("Page not found - 404");
});

app.listen(8000, () => {
	console.log("Listening on port 8000"); // localhost:8000
});