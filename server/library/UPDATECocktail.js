const Cocktail = require('../models/Cocktail');

const UPDATECocktail = async (request, response) => {
	const id = request.params.id;
	const cocktail = request.body;
	const updatedCocktail = await Cocktail.findByIdAndUpdate(id, cocktail);
	response.json({ success: true, id, updatedCocktail });
};

module.exports = UPDATECocktail;
