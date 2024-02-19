import { useEffect, useState } from 'react';
import './Home.css';

import { getRandomCocktail } from '../../services/getRandomCocktail';
import { CocktailCard } from '../../components/cocktails/cards/cocktailCard';

const mojito = require('../../data/mojito.json');

export const Home = ({ user }) => {
	const [data, setData] = useState(mojito);

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, []);

	useEffect(() => {
		getRandomCocktail({ setData });
		// console.log(data)
	}, []);

	return (
		<div className="home-container">
			<h1 className="home-title">
				<span>Cocktails</span> Master
			</h1>
			{user && <h5 className="user-name">Welcome: {user.name}</h5>}
			{data && <CocktailCard data={data} />}
			<section className="description">
				<h3>Our commitment</h3>
				<p>
					Our website caters to a diverse range of cocktail enthusiasts,
					including cocktail lovers, bartenders, party organizers, bars, and
					restaurants. For the cocktail lovers, we provide a treasure trove of
					cocktail recipes, allowing them to explore and indulge in a wide
					variety of delightful concoctions.
				</p>
				<br />
				<p>
					Bartenders can find inspiration, refine their skills, and discover new
					techniques to elevate their craft. Party organizers can rely on our
					website to plan memorable events, with access to crowd-pleasing
					cocktail recipes and mixology tips.
				</p>
				<br />
				<p>
					Bars and restaurants can leverage our platform to showcase their
					unique cocktail menus, attract patrons, and stay ahead in the
					competitive industry. Our website is a one-stop destination for all
					things cocktails, catering to the diverse needs of cocktail
					enthusiasts, professionals, and businesses alike.
				</p>
			</section>
		</div>
	);
};
