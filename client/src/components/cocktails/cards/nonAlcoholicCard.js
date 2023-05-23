import { useState } from 'react';
import './nonAlcoholicCard.css';

import { getByName } from '../../../services/getByName';
import { Modal } from '../../../components/modal/modal';
import { DetailedCard } from './detailedCard';

export const NonAlcoholicCard = ({ drink }) => {
	const [data, setData] = useState(null);
	const [showModal, setShowModal] = useState(true);

	const search = drink.strDrink;
	const handleMoreInfo = () => {
		getByName({ setData, search });
		setShowModal(true);
	};

	return (
		<div>
			<div className="non-alcoholic-card">
				<img src={drink.strDrinkThumb} alt={drink.strDrink} />
				<div className="non-alcoholic-text">
					<h5>{drink.strDrink}</h5>
					<button onClick={() => handleMoreInfo()}>More info...</button>
				</div>
			</div>

			{data && showModal && (
				<Modal>
					<DetailedCard data={data} setShowModal={setShowModal} />
				</Modal>
			)}
		</div>
	);
};
