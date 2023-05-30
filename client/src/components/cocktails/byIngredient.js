import { useEffect, useState } from 'react';
import './byIngredient.css';

import { getByIngredient } from '../../services/getByIngredient';
import { NonAlcoholicCard } from '../../components/cocktails/cards/nonAlcoholicCard';
import { BackToTop } from '../BackToTop/BackToTop';

export const ByIngredient = ({ search }) => {
	const [data, setData] = useState(null);

	useEffect(() => {
		getByIngredient({ setData, search });
	}, []);

	return (
		<div className="by-ingredient-container">
			<h2>
				By Ingredient: <span>{search}</span>
			</h2>
			{/* {!data && <h4 style={{ color: 'red' }}>Ingredient not found</h4>} */}
			<section className="by-ingredient-container-card">
				{data ? (
					data.drinks?.map((drink) => (
						<div key={drink.idDrink}>
							<NonAlcoholicCard drink={drink} />
						</div>
					))
				) : (
					<h4 className="loading">Loading...</h4>
				)}
			</section>
			<BackToTop />
		</div>
	);
};
