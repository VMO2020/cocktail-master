import './detailedCard.css';

export const DetailedCard = ({ data, setShowModal }) => {
	return (
		<div className="detailed-card">
			<img src={data.drinks[0].strDrinkThumb} alt={data.drinks[0].strDrink} />
			<h4>{data.drinks[0].strDrink}</h4>
			<p>Glass: {data.drinks[0].strGlass}</p>
			<p>{data.drinks[0].strIBA}</p>
			<h6>Ingredients:</h6>
			<p>
				<span>{data.drinks[0].strIngredient1} </span>
				{data.drinks[0].strMeasure1}
			</p>
			<p>
				<span>{data.drinks[0].strIngredient2} </span>
				{data.drinks[0].strMeasure2}
			</p>
			<p>
				<span>{data.drinks[0].strIngredient3} </span>
				{data.drinks[0].strMeasure3}
			</p>
			<p>
				<span>{data.drinks[0].strIngredient4} </span>
				{data.drinks[0].strMeasure4}
			</p>
			<p>
				<span>{data.drinks[0].strIngredient5} </span>
				{data.drinks[0].strMeasure5}
			</p>
			<p>
				<span>{data.drinks[0].strIngredient6} </span>
				{data.drinks[0].strMeasure6}
			</p>
			<p>
				<span>{data.drinks[0].strIngredient7} </span>
				{data.drinks[0].strMeasure7}
			</p>
			<p>
				<span>{data.drinks[0].strIngredient8} </span>
				{data.drinks[0].strMeasure8}
			</p>
			<p>
				<span>{data.drinks[0].strIngredient9} </span>
				{data.drinks[0].strMeasure9}
			</p>
			<p>
				<span>{data.drinks[0].strIngredient10} </span>
				{data.drinks[0].strMeasure10}
			</p>
			<p>
				<span>{data.drinks[0].strIngredient11} </span>
				{data.drinks[0].strMeasure11}
			</p>
			<p>
				<span>{data.drinks[0].strIngredient12} </span>
				{data.drinks[0].strMeasure12}
			</p>
			<p>
				<span>{data.drinks[0].strIngredient13} </span>
				{data.drinks[0].strMeasure13}
			</p>
			<p>
				<span>{data.drinks[0].strIngredient14} </span>
				{data.drinks[0].strMeasure14}
			</p>
			<p>
				<span>{data.drinks[0].strIngredient15} </span>
				{data.drinks[0].strMeasure15}
			</p>

			<button className="modal-button" onClick={() => setShowModal(false)}>
				X
			</button>
		</div>
	);
};
