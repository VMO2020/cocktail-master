const Cocktail = require('../models/Cocktail');

const CREATECocktail = async (request, response) => {
	const cocktail = request.body;
	await Cocktail.create(cocktail);
	response.json({ success: true, cocktail });
};

module.exports = CREATECocktail;
