const Cocktail = require('../models/Cocktail');

const GETCocktails = async (request, response) => {
	const cocktails = await Cocktail.find(request.query).sort({ _id: -1 });
	response.json(cocktails);
};

module.exports = GETCocktails;
