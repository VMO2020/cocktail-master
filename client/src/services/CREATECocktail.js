import axios from 'axios';

export const createCocktail = async (form) => {
	const URL = process.env.REACT_APP_URL;

	const config = {
		header: {
			'Content-Type': 'application/json',
		},
	};
	try {
		// console.log(form);
		const API = `${URL}/cocktail`;
		await axios.post(API, form, config);
	} catch (error) {
		console.log(error);
	}
};
