import { useState } from 'react';
import { Link } from 'react-router-dom';

import LoginButton from '../auth/Login';
import LogoutButton from '../auth/Logout';

import { ReactComponent as Menu } from '../../assets/menu.svg';

import './header.css';

export const Header = ({ user, isAuthenticated }) => {
	const [showMenu, setShowMenu] = useState(false);

	// MENU button Toggle
	const handleClick = (e) => {
		e.preventDefault();
		setShowMenu(!showMenu);
	};

	return (
		<header className="header-container">
			<img
				className="logo"
				src="https://w7.pngwing.com/pngs/295/214/png-transparent-cocktail-glasses-cocktail-juice-margarita-drink-cartoon-cocktail-cartoon-character-food-cartoons-thumbnail.png"
				alt="logo"
			/>
			{showMenu && (
				<nav>
					<Link to="/" className="header-link">
						Home
					</Link>
					<Link to="/about" className="header-link">
						About
					</Link>
					<Link to="/search" className="header-link">
						Search
					</Link>
					<Link to="/create" className="header-link">
						Create
					</Link>

					{isAuthenticated ? <LogoutButton /> : <LoginButton />}
				</nav>
			)}

			<div className="menu-container">
				<Menu onClick={handleClick} />

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
