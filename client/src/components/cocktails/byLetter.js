import { useEffect, useState } from 'react';
import './byLetter.css';

import { getByLetter } from '../../services/getByLetter';
import { DetailedCard2 } from '../cocktails/cards/detailedCard2';

export const ByLetter = ({ search }) => {
	const [letterData, setLetterData] = useState(null);

	useEffect(() => {
		getByLetter({ setLetterData, search });
	}, []);
	return (
		<div className="by-letter-container">
			<h2>
				By Letter: <span>{search}</span>
			</h2>

			{/* {!letterData && <h4 style={{ color: 'red' }}>Cocktail not found</h4>} */}
			<section className="by-letter-container-card">
				{letterData ? (
					letterData.drinks?.map((drink) => (
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
