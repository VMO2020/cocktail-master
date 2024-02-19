import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import LoginButton from '../auth/Login';
import LogoutButton from '../auth/Logout';

import { SERVER } from '../../services/SERVER';

import { ReactComponent as Menu } from '../../assets/menu.svg';

import './header.css';

export const Header = ({ user, isAuthenticated }) => {
	const [showMenu, setShowMenu] = useState(false);
	const [show, setShow] = useState('');

	// MENU button Toggle
	const handleClick = (e) => {
		e.preventDefault();
		setShowMenu(!showMenu);
	};

	useEffect(() => {
		SERVER({ setShow });
		// console.log(show);
	}, [show]);

	return (
		<header className="header-container">
			<img
				className="logo"
				src="https://w7.pngwing.com/pngs/295/214/png-transparent-cocktail-glasses-cocktail-juice-margarita-drink-cartoon-cocktail-cartoon-character-food-cartoons-thumbnail.png"
				alt="logo"
			/>

			{showMenu && (
				<nav>
					<Link
						to="/"
						className="header-link"
						onClick={() => setShowMenu(!showMenu)}
					>
						Home
					</Link>
					<Link
						to="/about"
						className="header-link"
						onClick={() => setShowMenu(!showMenu)}
					>
						About
					</Link>
					<Link
						to="/search"
						className="header-link"
						onClick={() => setShowMenu(!showMenu)}
					>
						Search
					</Link>
					<Link
						to="/create"
						className="header-link"
						onClick={() => setShowMenu(!showMenu)}
					>
						Create
					</Link>

					{isAuthenticated ? <LogoutButton /> : <LoginButton />}
				</nav>
			)}

			<div className="menu-container">
				{show === 'Welcome to the Cocktail Master API.' ? (
					<Menu onClick={handleClick} />
				) : (
					<p style={{ color: 'white' }}>Loading...</p>
				)}

				{isAuthenticated && (
					<Link to="/user" className="header-link-img">
						<img
							src={user.picture}
							alt={user.name}
							className="header-user-img"
						/>
					</Link>
				)}
			</div>
		</header>
	);
};
