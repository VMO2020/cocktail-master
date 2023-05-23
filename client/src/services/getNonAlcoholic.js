import axios from 'axios';

export const getNonAlcoholic = async ({ setData }) => {
	const URL = process.env.REACT_APP_URL;

	try {
		const API = `${URL}/nonalcoholic`;
		const res = await axios.get(API);
		// console.log(res.data);
		setData(res.data);
		return res.data;
	} catch (error) {
		console.log(error);
	}
};
