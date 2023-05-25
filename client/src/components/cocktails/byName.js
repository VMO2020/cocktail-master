import { useEffect, useState } from 'react';
import './byName.css';

import { getByName } from '../../services/getByName';
import { DetailedCard2 } from '../cocktails/cards/detailedCard2';

export const ByName = ({ search }) => {
	const [data, setData] = useState(null);

	useEffect(() => {
		getByName({ setData, search });
	}, []);

	return (
		<div className="by-name-container">
			<h2>
				By Name <span>{search}</span>
			</h2>
			{/* {!data && <h4 style={{ color: 'red' }}>Cocktail not found</h4>} */}
			<section className="by-name-container-card">
				{data ? (
					data.drinks?.map((drink) => (
						<div key={drink.idDrink}>
							<DetailedCard2 data={drink} />
						</div>
					))
				) : (
					<h4 className="loading">Loading...</h4>
				)}
			</section>
		</div>
	);
};
