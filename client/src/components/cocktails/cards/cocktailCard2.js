import { useEffect, useState } from 'react';
import './cocktailCard2.css';

import { Modal } from '../../../components/modal/modal';
import { getCocktails } from '../../../services/getCocktails';
import { DeleteCocktail } from '../../../services/DELETECocktail';
import { UpdateCocktail } from '../../../components/update/updateCocktail';

// Icons
import { ReactComponent as Edit } from '../../../assets/edit_nc.svg';
import { ReactComponent as Delete } from '../../../assets/delete_full_nc.svg';

export const CocktailCard2 = ({ cocktail, user, setData }) => {
	const [auth, setAuth] = useState(false);
	const [showModal, setShowModal] = useState(false);

	const handleDeleteCocktail = async () => {
		const confirmation = window.confirm(
			'Are you sure you want to delete this great cocktail?'
		);
		if (confirmation) {
			await DeleteCocktail(cocktail._id);
			getCocktails({ setData });
		} else {
			// Cancelled, do nothing or perform any desired action
		}
	};

	const handleUpdateCocktail = () => {
		handleModal();
	};

	const handleModal = () => {
		setShowModal(!showModal);
	};

	useEffect(() => {
		if (cocktail.author === user?.name) {
			setAuth(true);
		}
	}, []);

	return (
		<div className="card-2-container">
			<img src={cocktail.image} alt={cocktail.name} />
			<h4>{cocktail.name}</h4>
			<p>{cocktail.glass}</p>
			<h6>Ingredients: </h6>
			<p>
				<span>{cocktail.ingredients[0]}</span> {cocktail.measure[0]}
			</p>
			<p>
				<span>{cocktail.ingredients[1]}</span> {cocktail.measure[1]}
			</p>
			<p>
				<span>{cocktail.ingredients[2]}</span> {cocktail.measure[2]}
			</p>
			<p>
				<span>{cocktail.ingredients[3]}</span> {cocktail.measure[3]}
			</p>
			<p>
				<span>{cocktail.ingredients[4]}</span> {cocktail.measure[4]}
			</p>
			<p>
				<span>{cocktail.ingredients[5]}</span> {cocktail.measure[5]}
			</p>
			<p>
				<span>{cocktail.ingredients[6]}</span> {cocktail.measure[6]}
			</p>
			<h6>Author: {cocktail.author}</h6>
			{auth && (
				<div className="edit-delete-container">
					<p onClick={handleUpdateCocktail} className="form-edit">
						<Edit />
					</p>
					<p onClick={handleDeleteCocktail} className="form-delete">
						<Delete />
					</p>
				</div>
			)}
			{showModal && (
				<Modal>
					<UpdateCocktail
						setShowModal={setShowModal}
						cocktail={cocktail}
						setData={setData}
					/>
				</Modal>
			)}
		</div>
	);
};
