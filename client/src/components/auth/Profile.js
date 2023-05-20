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
				<article className="profile-card-container">
					{user?.picture && (
						<img src={user?.picture} alt={user?.name} className="user-img" />
					)}
					<p>
						name: <span>{user?.name}</span>
					</p>
					<p>
						nickname: <span> {user?.nickname}</span>
					</p>
					<p>
						email: <span> {user?.email}</span>
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
