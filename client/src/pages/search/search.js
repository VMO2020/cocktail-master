import { useState } from 'react';
import './search.css';
// Icons
import { ReactComponent as Bar } from '../../assets/bar.svg';
import { ReactComponent as Liquor } from '../../assets/liquor.svg';
import { ReactComponent as Nightlife } from '../../assets/nightlife.svg';
import { ReactComponent as Wine } from '../../assets/wine.svg';
import { ReactComponent as Non } from '../../assets/nodrinks.svg';
// Components
import { Random } from '../../components/cocktails/random';
import { ByName } from '../../components/cocktails/byName';
import { ByLetter } from '../../components/cocktails/byLetter';
import { ByIngredient } from '../../components/cocktails/byIngredient';
import { NonAlcoholic } from '../../components/cocktails/nonAlcoholic';

export const Search = () => {
	const [search, setSearch] = useState('');
	const [random, setRandom] = useState(false);
	const [byName, setByName] = useState(false);
	const [byLetter, setByLetter] = useState(false);
	const [byIngredient, setByIngredient] = useState(false);
	const [nonAlcoholic, setNonAlcoholic] = useState(false);
	const [letter, setLetter] = useState('');

	const handleByName = () => {
		Reset();
		setByName(!byName);
	};

	const handleByLetter = () => {
		Reset();
		setLetter(search.charAt(0));
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

	const handleNonAlcoholic = () => {
		Reset();
		setNonAlcoholic(!nonAlcoholic);
	};

	const Reset = () => {
		setByName(false);
		setRandom(false);
		setByLetter(false);
		setByIngredient(false);
		setNonAlcoholic(false);
	};

	const handleInputReset = () => {
		setSearch('');
	};

	const handleChange = (event) => {
		setSearch(event.target.value);
		Reset();
		// console.log(event.target.value);
	};

	return (
		<main className="search-container">
			<h1 className="search-title">
				<span>Search </span>Cocktails
			</h1>
			<div className="search-input">
				<input
					type="text"
					value={search}
					onChange={(event) => {
						handleChange(event);
					}}
					placeholder="Add a name or letter..."
				/>
				<button className="reset" onClick={handleInputReset}>
					Reset
				</button>
			</div>
			<div className="selectors-container">
				<div
					className="selector-card"
					style={{ backgroundColor: byName ? 'aqua' : 'white' }}
					onClick={handleByName}
				>
					<div className="icon-container">
						<Bar />
					</div>
					<p>by name</p>
				</div>

				<div
					className="selector-card"
					onClick={handleByLetter}
					style={{ backgroundColor: byLetter ? 'aqua' : 'white' }}
				>
					<div className="icon-container">
						<Wine />
					</div>
					<p>by first letter</p>
				</div>

				<div
					className="selector-card"
					onClick={handleByIngredient}
					style={{ backgroundColor: byIngredient ? 'aqua' : 'white' }}
				>
					<div className="icon-container">
						<Liquor />
					</div>
					<p>by ingredient</p>
				</div>

				<div
					className="selector-card"
					onClick={handleRandom}
					style={{ backgroundColor: random ? 'aqua' : 'white' }}
				>
					<div className="icon-container">
						<Nightlife />
					</div>
					<p>random</p>
				</div>

				<div
					className="selector-card"
					onClick={handleNonAlcoholic}
					style={{ backgroundColor: nonAlcoholic ? 'aqua' : 'white' }}
				>
					<div className="icon-container">
						<Non />
					</div>
					<p>Non Alcoholic</p>
				</div>
			</div>
			<div>{random && <Random />}</div>
			<div>{nonAlcoholic && <NonAlcoholic />}</div>
			<div>{byName && <ByName search={search} />}</div>
			<div>{byLetter && <ByLetter search={letter} />}</div>
			<div>{byIngredient && <ByIngredient search={search} />}</div>
		</main>
	);
};
