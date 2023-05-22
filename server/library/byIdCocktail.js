const axios = require('axios');

const byIdCocktail = async (req, res) => {
	// http://localhost:3001/byid?i=15346

	try {
		const id = req.query.i || 11007;
		const API = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
		const result = await axios.get(API);
		const data = await result.data;

		res.status(200).json(data);
	} catch (error) {
		console.error(error);
		res.status(404).json(error);
	}
};

module.exports = byIdCocktail;
