const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const app = express();
const upload = multer({ dest: "./public/uploads" });
const cors = require('cors');

app.use((req, res, next) => {
	console.log("requête reçu");
	next();
  });

  app.use(cors())

const users = [
    {
        name:"bahar"
    }
];
app.use(express.json());
app.use(express.static("public"));
app.get("/user", (req, res) => {
    res.json(users);
  });

app.post("/user", upload.single("image"), (req, res) => {
    const user = req.body; 
	fs.renameSync(
		req.file.path,
		path.join(req.file.destination, req.file.originalname)
	);
    users.push(user);
	res.send("Image received");
    res.json({ message: "User added",
        users});
});
//To test if I can see the image in my localhost in Postman
app.get("/uploads/image.jpeg")

app.listen(8000, () => console.log("Listening"));