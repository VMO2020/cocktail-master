import './search.css';

import { ReactComponent as Bar } from '../../assets/bar.svg';
import { ReactComponent as Liquor } from '../../assets/liquor.svg';
import { ReactComponent as Nightlife } from '../../assets/nightlife.svg';
import { ReactComponent as Wine } from '../../assets/wine.svg';
import { Random } from '../../components/cocktails/random';
import { useState } from 'react';

export const Search = () => {
	const [search, setSearch] = useState('');
	const [random, setRandom] = useState(false);

	const handleRandom = () => {
		Reset();
		setRandom(!random);
	};

	const Reset = () => {
		setRandom(false);
	};

	const handleChange = (event) => {
		setSearch(event.target.value);
		// console.log(event.target.value);
	};

	return (
		<main className="search-container">
			<h1 className="search-title">Search Cocktails</h1>
			<input
				type="text"
				value={search}
				onChange={(event) => {
					handleChange(event);
				}}
				placeholder="Add a name or letter..."
			/>
			<div className="selectors-container">
				<div className="icon-container">
					<Bar />
					<p>by name</p>
				</div>
				<div className="icon-container">
					<Wine />
					<p>by letter</p>
				</div>
				<div className="icon-container">
					<Liquor />
					<p>by ingredient</p>
				</div>
				<div className="icon-container" onClick={handleRandom}>
					<Nightlife />
					<p>random</p>
				</div>
			</div>
			<div>{random && <Random />}</div>
		</main>
	);
};
