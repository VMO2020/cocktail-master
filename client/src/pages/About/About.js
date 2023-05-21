import './about.css';

export const About = () => {
	return (
		<div className="about-container">
			<h2 className="about-title">About Me</h2>
			<h4 className="about-name">Eng. Victor M. Ottati</h4>
			<p className="about-description">
				Engineer, Photographer and Fullstack website developer with React JS
				Node Js and Express
			</p>
			<div className="links-container">
				<a
					href={'https://vmog.net/'}
					target="_blank"
					rel="noreferrer"
					className="web-link"
				>
					Website Link
				</a>
				<a
					href={'https://vmog.net/assets/pdf/VMO_CV_2023.pdf'}
					target="_blank"
					rel="noreferrer"
					className="resume-link"
				>
					RESUME
				</a>
			</div>
		</div>
	);
};
