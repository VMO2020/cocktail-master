import { useEffect, useState } from 'react';
import './nonAlcoholic.css';

import { getNonAlcoholic } from '../../services/getNonAlcoholic';
import { NonAlcoholicCard } from '../../components/cocktails/cards/nonAlcoholicCard';

export const NonAlcoholic = () => {
	const [data, setData] = useState(null);

	useEffect(() => {
		getNonAlcoholic({ setData });
	}, []);

	return (
		<div className="non-alcoholic-container">
			<h2>Non-Alcoholic Cocktails</h2>
			<section className="non-alcoholic-cards-container">
				{data &&
					data.drinks?.map((drink) => (
						<div key={drink.idDrink}>
							<NonAlcoholicCard drink={drink} />
						</div>
					))}
			</section>
		</div>
	);
};
