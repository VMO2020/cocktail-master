import { useEffect, useState } from 'react';

import './Home.css';

import { getRandomCocktail } from '../../services/getRandomCocktail';
import { CocktailCard } from '../../components/cocktails/cocktailCard';

export const Home = ({ user }) => {
	const [data, setData] = useState(null);

	useEffect(() => {
		getRandomCocktail({ setData });
	}, []);

	return (
		<div className="home-container">
			<h1 className="home-title">Cocktails Master</h1>
			{user && <h5 className="user-name">Welcome: {user.name}</h5>}
			{data && <CocktailCard data={data} />}
		</div>
	);
};
