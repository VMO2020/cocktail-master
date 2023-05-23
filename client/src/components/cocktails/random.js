import { useEffect, useState } from 'react';
import './random.css';

import { getRandomCocktail } from '../../services/getRandomCocktail';
import { CocktailCard } from './cards/cocktailCard';

export const Random = () => {
	const [data, setData] = useState(null);

	useEffect(() => {
		getRandomCocktail({ setData });
	}, []);
	return <>{data && <CocktailCard data={data} />}</>;
};
