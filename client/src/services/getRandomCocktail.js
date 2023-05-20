import axios from 'axios';

export const getRandomCocktail = async ({ setData }) => {
	try {
		const API = `http://localhost:3001/random`;
		const res = await axios.get(API);
		console.log(res.data);
		setData(res.data);
		return res.data;
	} catch (error) {
		console.log(error);
	}
};
