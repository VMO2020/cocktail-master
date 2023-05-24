import axios from 'axios';

export const DeleteCocktail = async (id) => {
	const URL = process.env.REACT_APP_URL;

	try {
		// console.log(id);
		const API = `${URL}/cocktail/${id}`;
		await axios.delete(API);
	} catch (error) {
		console.log(error);
	}
};
