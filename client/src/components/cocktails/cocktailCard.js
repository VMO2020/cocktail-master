import React from 'react';
import './cocktailCard.css';

export const CocktailCard = ({ data }) => {
	return (
		<section className="cocktail-card-container">
			{data && (
				<>
					<div className="cocktail-card-img">
						<img
							className="cocktail-img"
							src={data.drinks[0].strDrinkThumb}
							alt={data.drinks[0].strDrin}
						/>
					</div>
					<div className="cocktail-card-text">
						<h3>{data.drinks[0].strDrink}</h3>
						<p>{data.drinks[0].strGlass}</p>
						<h5>Ingredients:</h5>
						<p>{data.drinks[0].strIngredient1}</p>
						<p>{data.drinks[0].strIngredient2}</p>
						<p>{data.drinks[0].strIngredient3}</p>
						<p>{data.drinks[0].strIngredient4}</p>
						<p>{data.drinks[0].strIngredient5}</p>
						<p>{data.drinks[0].strIngredient6}</p>
						<p>{data.drinks[0].strIngredient7}</p>
					</div>
				</>
			)}
		</section>
	);
};
