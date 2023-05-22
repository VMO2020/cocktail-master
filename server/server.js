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
const byNameCocktail = require('./library/byNameCocktail.js');
const byLetterCocktail = require('./library/byLetterCocktail.js');
const byIngredientCocktail = require('./library/byIngredientCocktails.js');
const byIdCocktail = require('./library/byIdCocktail.js');
const nonAlcoholicCocktails = require('./library/nonAlcoholic.js');

// ROOT
app.get('/', (request, response) => {
	response.json('Welcome to the Cocktail Master API.');
});
// Random Cocktail
app.get('/random', randomCocktail);
// By Name Cocktail
app.get('/byname', byNameCocktail);
// By Letter Cocktail
app.get('/byletter', byLetterCocktail);
// By Ingredient Cocktails
app.get('/byingredient', byIngredientCocktail);
// By ID Cocktail
app.get('/byid', byIdCocktail);
// Non Alcoholic
app.get('/nonalcoholic', nonAlcoholicCocktails);

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
