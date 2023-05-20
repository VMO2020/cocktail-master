import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import './auth.css';

const Profile = () => {
	const { user, isAuthenticated, isLoading } = useAuth0();
	// console.log(user);

	if (isLoading) {
		return <div>Loading ...</div>;
	}

	return (
		isAuthenticated && (
			<div className="profile-container">
				<article className="card-container">
					{user?.picture && (
						<img src={user?.picture} alt={user?.name} className="user-img" />
					)}
					<h2>
						{' '}
						<span>name:</span> {user?.name}
					</h2>
					<p>
						<span>nickname:</span> {user?.nickname}
					</p>
					<p>
						<span>email:</span> {user?.email}
					</p>
					<br />
					<ul>
						<span>DATA:</span>
						{Object.keys(user).map((objKey, i) => (
							<li key={i}>
								<span>{objKey}:</span> {user[objKey]}
							</li>
						))}
					</ul>
				</article>
			</div>
		)
	);
};

export default Profile;
