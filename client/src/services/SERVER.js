import axios from 'axios';

export const SERVER = async ({ setShow }) => {
	const URL = process.env.REACT_APP_URL;

	try {
		const API = `${URL}`;
		const res = await axios.get(API);
		// console.log(res.data);
		setShow(res.data);
		return res.data;
	} catch (error) {
		console.log(error);
	}
};
