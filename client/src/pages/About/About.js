import './About.css';

export const About = () => {
	return (
		<div className="about-container">
			<h2 className="about-title">About Me</h2>
			<h4 className="about-name">Eng. Victor M. Ottati</h4>
			<p className="about-description">
				Engineer, Photographer and Fullstack website developer with React JS
				Node Js and Express
			</p>
			<a
				href={'https://vmog.net/'}
				target="_blank"
				rel="noreferrer"
				className="link"
			>
				Website Link
			</a>
		</div>
	);
};
