import { Link } from 'react-router-dom';
import LoginButton from '../auth/Login';
import LogoutButton from '../auth/Logout';

import './header.css';

export const Header = ({ user, isAuthenticated }) => {
	return (
		<header className="header-container">
			<img
				className="logo"
				src="https://w7.pngwing.com/pngs/295/214/png-transparent-cocktail-glasses-cocktail-juice-margarita-drink-cartoon-cocktail-cartoon-character-food-cartoons-thumbnail.png"
				alt="logo"
			/>
			<nav>
				<Link to="/" className="header-link">
					Home
				</Link>
				<Link to="/about" className="header-link">
					About
				</Link>

				{isAuthenticated ? <LogoutButton /> : <LoginButton />}

				{isAuthenticated && (
					<Link to="/user" className="header-link-img">
						<img
							src={user.picture}
							alt={user.name}
							className="header-user-img"
						/>
					</Link>
				)}
			</nav>
		</header>
	);
};
