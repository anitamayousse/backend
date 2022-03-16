const express = require("express");
const router = express.Router();
const Joi = require("Joi");

const schema = Joi.object({
	username: Joi.string()
	.required()
	.alphanum()
	.min(4)
	.max(20),

	email: Joi.string()
	.email({
		minDomainSegments:2 , tlds:{
			allow:['com','net']
		}
	}),

	age: Joi.number()
	.min(1)
	.integer()
	.required(),

	city: Joi.string()
	.required()
	.alphanum()
});

// localhost:8000/products/
// localhost:8000/products/all

const users = [
	{
		username: "anita",
		email: "anita@gmail.com",
		age: 30,
		city:"Paris",
	},
];

// routes
router.get("/", (req, res) => {

	res.json({
		message:"All the users",
		users});
});

router.get("/:username", (req, res) => {

	res.json("user info: " + 
	req.params.username
 );
});

router.post("/", (req, res) => {
	const user = req.body;

	const validationResult = schema.validate(user);

	if (validationResult.error) {
		return res.status(400).json({
			message: validationResult.error,
		});
	}

	users.push(user);

	res.json({
		message: "User added",
		users,
	});
});

// on exporte le router
module.exports = router;