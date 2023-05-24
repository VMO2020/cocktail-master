import { useState } from 'react';
import './updateCocktail.css';

import { getCocktails } from '../../services/getCocktails';
import { updateCocktail } from '../../services/UPDATECocktail';

export const UpdateCocktail = ({ setShowModal, cocktail, setData }) => {
	const [form, setForm] = useState({
		name: cocktail.name,
		glass: cocktail.glass,
		ingredients: cocktail.ingredients,
		measure: cocktail.measure,
		image: cocktail.image,
		author: cocktail.author,
	});

	const handleModal = () => {
		setShowModal(false);
	};

	const handleCreate = async (event) => {
		event.preventDefault();
		const id = cocktail._id;
		await updateCocktail({ form, id });
		setShowModal(false);
		getCocktails({ setData });
		// console.log(form);
	};

	const handleInputChange = (event) => {
		const { name, value } = event.target;

		if (name === 'ingredients' || name === 'measure') {
			setForm({ ...form, [name]: value.split(',') });
		} else {
			setForm({ ...form, [name]: value });
		}
	};

	return (
		<div className="update-card-container">
			<form onSubmit={handleCreate}>
				<h3>Update a Cocktail</h3>
				<label>Cocktail Name:</label>
				<input
					name="name"
					placeholder="name"
					onChange={handleInputChange}
					value={form.name}
				/>
				<label>Glass Required:</label>
				<input
					name="glass"
					placeholder="Glass Type"
					onChange={handleInputChange}
					value={form.glass}
				/>
				<label>Ingredients:</label>
				<textarea
					name="ingredients"
					placeholder="Ingredients separated by commas"
					onChange={handleInputChange}
					value={form.ingredients}
				/>
				<label>Measure:</label>
				<textarea
					name="measure"
					placeholder="Measure separated by commas"
					onChange={handleInputChange}
					value={form.measure}
				/>
				<label>Image link:</label>
				<input
					name="image"
					placeholder="Image link"
					onChange={handleInputChange}
					value={form.image}
				/>
				<input type="submit" className="submit" />
				<p className="close" onClick={handleModal}>
					X
				</p>
			</form>
		</div>
	);
};
