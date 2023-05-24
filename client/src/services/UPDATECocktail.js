import axios from 'axios';

export const updateCocktail = async ({ form, id }) => {
	const URL = process.env.REACT_APP_URL;
	// console.log(form);

	const config = {
		header: {
			'Content-Type': 'application/json',
		},
	};
	try {
		// console.log(form);
		const API = `${URL}/cocktail/${id}`;
		await axios.put(API, form, config);
	} catch (error) {
		console.log(error);
	}
};
