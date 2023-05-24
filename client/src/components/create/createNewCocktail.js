import './createNewCocktail.css';

export const CreateNewCocktail = ({
	setShowModal,
	handleCreate,
	handleInputChange,
	form,
}) => {
	const handleModal = () => {
		setShowModal(false);
	};
	// console.log(form);

	return (
		<div className="create-card-container">
			<form onSubmit={handleCreate}>
				<h3>Add a new cocktail</h3>
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
