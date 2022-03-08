const express = require("express");
const app = express();

app.use(express.json());

app.use(function (req, res, next) {
    console.log("Je fais un console.log à chaque requête", new Date().toDateString());
    next(); // call the next function to execute the following routes
    // if removed, the next route never fires
  });


const superHeros = [
    {
        name: "Iron Man",
        power: ["money"],
        color: "red",
        isAlive: true,
        age: 46,
        image: "https://blog.fr.playstation.com/tachyon/sites/10/2019/07/unnamed-file-18.jpg?resize=1088,500&crop_strategy=smart"
    },
    {
        name: "Thor",
        power: ["electricity", "worthy"],
        color: "blue",
        isAlive: true,
        age: 300,
        image: "https://www.bdfugue.com/media/catalog/product/cache/1/image/400x/17f82f742ffe127f42dca9de82fb58b1/9/7/9782809465761_1_75.jpg"
    },
    {
        name: "Daredevil",
        power: ["blind"],
        color: "red",
        isAlive: false,
        age: 30,
        image: "https://aws.vdkimg.com/film/2/5/1/1/251170_backdrop_scale_1280xauto.jpg"
    }
]

// Routes

app.get("/heroes", (req, res) => {

	res.json(superHeros);
});

app.get("/heroes/:name", (req, res) => {
    const nameHero = superHeros.find((hero) => {
		return (
			hero.name === req.params.name  
		);
	});

	res.json(nameHero);
   
    if (!nameHero) {
        res.send({
          message: " This hero is not exist",
        });
    }
  });

app.get("/heroes/:name/powers", (req, res) => {

    const powers = superHeros.find((hero) => {
      return req.params.name === hero.name;
    })
  res.json(powers.power);
});


app.post("/heroes", (req, res) => {
    superHeros.push({
		name: req.body.name,
    power: [req.body.power],
	});
	res.json(superHeros);
});


// Handle errors
app.get("*", (_req, res) => {
	res.status(404).send("Page not found");
});

// Start the server
app.listen(8000, () => {
	console.log("Listening");
});