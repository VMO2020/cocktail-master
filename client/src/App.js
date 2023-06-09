import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import './Reset.css';
import './styles.css';

import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Home } from './pages/home/Home';
import { About } from './pages/About/About';
import Profile from './components/auth/Profile';
import { Search } from './pages/search/search';
import { Create } from './pages/create/create';

function App() {
	const { user, isAuthenticated, isLoading, error } = useAuth0();
	return (
		<BrowserRouter>
			<Header user={user} isAuthenticated={isAuthenticated} />
			{error && <p>Authentication Error</p>}
			<Routes>
				<Route path="/" element={<Home user={user} />} />
				<Route path="/about" element={<About />} />
				<Route path="/search" element={<Search />} />
				<Route path="/create" element={<Create user={user} />} />
				{isAuthenticated && <Route path="/user" element={<Profile />} />}
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
