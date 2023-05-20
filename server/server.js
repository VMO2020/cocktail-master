require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 8080;
const app = express();

app.use(cors());

const bp = require('body-parser');
app.use(bp.json());

const randomCocktail = require('./library/randomCocktail.js');

// ROOT
app.get('/', (request, response) => {
	response.json('Welcome to the Cocktail Master API.');
});

// RANDOM COCKTAIL
app.get('/random', randomCocktail);

mongoose
	.connect(process.env.DATABASE_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log('MongoDB Atlas Connected!');
	})
	.then(() =>
		app.listen(PORT, () => console.log(`Server is running on Port: ${PORT}`))
	)
	.catch((error) => console.log(error.message));
