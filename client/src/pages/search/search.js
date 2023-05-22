import './search.css';

import { ReactComponent as Bar } from '../../assets/bar.svg';
import { ReactComponent as Liquor } from '../../assets/liquor.svg';
import { ReactComponent as Nightlife } from '../../assets/nightlife.svg';
import { ReactComponent as Wine } from '../../assets/wine.svg';
import { Random } from '../../components/cocktails/random';
import { useState } from 'react';
import { ByName } from '../../components/cocktails/byName';
import { ByLetter } from '../../components/cocktails/byLetter';
import { ByIngredient } from '../../components/cocktails/byIngredient';

export const Search = () => {
	const [search, setSearch] = useState('');
	const [random, setRandom] = useState(false);
	const [byName, setByName] = useState(false);
	const [byLetter, setByLetter] = useState(false);
	const [byIngredient, setByIngredient] = useState(false);

	const handleByName = () => {
		Reset();
		setByName(!byName);
	};

	const handleByLetter = () => {
		Reset();
		setByLetter(!byLetter);
	};

	const handleByIngredient = () => {
		Reset();
		setByIngredient(!byIngredient);
	};

	const handleRandom = () => {
		Reset();
		setRandom(!random);
	};

	const Reset = () => {
		setByName(false);
		setRandom(false);
		setByLetter(false);
		setByIngredient(false);
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
				<div
					className="icon-container"
					onClick={handleByName}
					style={{ backgroundColor: byName ? 'aqua' : 'white' }}
				>
					<Bar />
					<p>by name</p>
				</div>
				<div
					className="icon-container"
					onClick={handleByLetter}
					style={{ backgroundColor: byLetter ? 'aqua' : 'white' }}
				>
					<Wine />
					<p>by first letter</p>
				</div>
				<div
					className="icon-container"
					onClick={handleByIngredient}
					style={{ backgroundColor: byIngredient ? 'aqua' : 'white' }}
				>
					<Liquor />
					<p>by ingredient</p>
				</div>
				<div
					className="icon-container"
					onClick={handleRandom}
					style={{ backgroundColor: random ? 'aqua' : 'white' }}
				>
					<Nightlife />
					<p>random</p>
				</div>
			</div>
			<div>{random && <Random />}</div>
			<div>{byName && <ByName search={search} />}</div>
			<div>{byLetter && <ByLetter search={search} />}</div>
			<div>{byIngredient && <ByIngredient search={search} />}</div>
		</main>
	);
};
