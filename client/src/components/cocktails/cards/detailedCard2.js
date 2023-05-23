import './detailedCard2.css';

export const DetailedCard2 = ({ data }) => {
	console.log(data);
	return (
		<div className="detailed-card-2">
			<img src={data.strDrinkThumb} alt={data.strDrink} />
			<h4>{data.strDrink}</h4>
			<p>Glass: {data.strGlass}</p>
			<p>{data.strIBA}</p>
			<h6>Ingredients:</h6>
			<p>
				<span>{data.strIngredient1} </span>
				{data.strMeasure1}
			</p>
			<p>
				<span>{data.strIngredient2} </span>
				{data.strMeasure2}
			</p>
			<p>
				<span>{data.strIngredient3} </span>
				{data.strMeasure3}
			</p>
			<p>
				<span>{data.strIngredient4} </span>
				{data.strMeasure4}
			</p>
			<p>
				<span>{data.strIngredient5} </span>
				{data.strMeasure5}
			</p>
			<p>
				<span>{data.strIngredient6} </span>
				{data.strMeasure6}
			</p>
			<p>
				<span>{data.strIngredient7} </span>
				{data.strMeasure7}
			</p>
			<p>
				<span>{data.strIngredient8} </span>
				{data.strMeasure8}
			</p>
			<p>
				<span>{data.strIngredient9} </span>
				{data.strMeasure9}
			</p>
			<p>
				<span>{data.strIngredient10} </span>
				{data.strMeasure10}
			</p>
			<p>
				<span>{data.strIngredient11} </span>
				{data.strMeasure11}
			</p>
			<p>
				<span>{data.strIngredient12} </span>
				{data.strMeasure12}
			</p>
			<p>
				<span>{data.strIngredient13} </span>
				{data.strMeasure13}
			</p>
			<p>
				<span>{data.strIngredient14} </span>
				{data.strMeasure14}
			</p>
			<p>
				<span>{data.strIngredient15} </span>
				{data.strMeasure15}
			</p>
		</div>
	);
};
