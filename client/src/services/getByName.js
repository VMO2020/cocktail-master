import axios from 'axios';

export const getByName = async ({ setData, search }) => {
	const URL = process.env.REACT_APP_URL;

	try {
		const API = `${URL}/byname?s=${search}`;
		const res = await axios.get(API);
		// console.log(res.data);
		setData(res.data);
		return res.data;
	} catch (error) {
		console.log(error);
	}
};
