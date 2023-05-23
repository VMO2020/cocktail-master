const Cocktail = require('../models/Cocktail');

const DELETECocktail = async (request, response) => {
	const id = request.params.id;
	// Checking if the cocktail is already in the database
	const cocktailExist = await Cocktail.findOne({ _id: id });
	if (!cocktailExist)
		return response.status(404).send({
			success: false,
			error: `No cocktail with id: ${id}`,
		});
	// Delete Cocktail
	await Cocktail.findByIdAndDelete(id);
	response.json({ success: true, id });
};

module.exports = DELETECocktail;
