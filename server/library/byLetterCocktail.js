const axios = require('axios');

const byLetterCocktail = async (req, res) => {
	// http://localhost:3001/byletter?f=m

	try {
		const letter = req.query.f || 'a';
		const API = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`;
		const result = await axios.get(API);
		const data = await result.data;

		res.status(200).json(data);
	} catch (error) {
		console.error(error);
		res.status(404).json(error);
	}
};

module.exports = byLetterCocktail;
