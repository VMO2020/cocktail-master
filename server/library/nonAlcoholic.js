const axios = require('axios');

const nonAlcoholicCocktails = async (req, res) => {
	try {
		const API =
			'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic';
		const result = await axios.get(API);
		const data = await result.data;

		res.status(200).json(data);
	} catch (error) {
		console.error(error);
		res.status(404).json(error);
	}
};

module.exports = nonAlcoholicCocktails;
