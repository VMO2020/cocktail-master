import { useEffect, useState } from 'react';
import './create.css';

import { Modal } from '../../components/modal/modal';
import LoginButton from '../../components/auth/Login';
import { getCocktails } from '../../services/getCocktails';
import { CocktailCard2 } from '../../components/cocktails/cards/cocktailCard2';
import { CreateNewCocktail } from '../../components/create/createNewCocktail';
import { createCocktail } from '../../services/CREATECocktail';

const images = require('../../data/images.json').imageLinks;

const initialForm = {
	name: '',
	glass: '',
	ingredients: [],
	measure: [],
	image:
		'https://www.thecocktaildb.com/images/media/drink/ib0b7g1504818925.jpg',
	author: '',
};

export const Create = ({ user }) => {
	const [data, setData] = useState(null);
	const [randomImage, setRandomImage] = useState(
		'https://www.thecocktaildb.com/images/media/drink/ib0b7g1504818925.jpg'
	);
	const [form, setForm] = useState(initialForm);
	const [showModal, setShowModal] = useState(false);

	function getRandomImageLink() {
		const randomIndex = Math.floor(Math.random() * images.length);
		// console.log(images[randomIndex]);
		setRandomImage(images[randomIndex]);
	}

	const handleInputChange = (event) => {
		const { name, value } = event.target;

		if (name === 'ingredients' || name === 'measure') {
			setForm({ ...form, [name]: value.split(',') });
		} else {
			setForm({ ...form, [name]: value });
		}
	};

	const handleCreate = async (event) => {
		event.preventDefault();
		// console.log(form);
		await createCocktail(form);
		// setForm(initialForm);
		setForm({
			name: '',
			glass: '',
			ingredients: [],
			measure: [],
			image: randomImage,
			author: user.name,
		});
		setShowModal(false);
		getCocktails({ setData });
	};

	const handleModal = () => {
		getRandomImageLink();
		setForm({
			name: '',
			glass: '',
			ingredients: [],
			measure: [],
			image: randomImage,
			author: user.name,
		});
		setShowModal(!showModal);
	};

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
		user?.name && setForm({ ...form, author: user.name });
	}, []);

	useEffect(() => {
		getCocktails({ setData });
	}, []);

	return (
		<main className="create-container">
			<h1 className="create-title">
				<span>Create</span> Cocktails
			</h1>
			{user?.name ? (
				<button onClick={handleModal}>Create a new cocktail</button>
			) : (
				<div className="login-container">
					<LoginButton />
					<h4 className="login"> to create a new Cocktail</h4>
				</div>
			)}
			<h4>New Cocktails List:</h4>
			<section className="create-cards-container">
				{data ? (
					data?.map((cocktail) => (
						<div key={cocktail._id} className="card">
							<CocktailCard2
								cocktail={cocktail}
								user={user}
								setData={setData}
							/>
						</div>
					))
				) : (
					<h4 className="loading">Loading...</h4>
				)}
			</section>
			{showModal && (
				<Modal>
					<CreateNewCocktail
						setShowModal={setShowModal}
						handleCreate={handleCreate}
						handleInputChange={handleInputChange}
						form={form}
					/>
				</Modal>
			)}
		</main>
	);
};
