import './about.css';

// MERN
import { ReactComponent as Mongo } from '../../assets/images/mongodb.svg';
import { ReactComponent as Express } from '../../assets/images/express.svg';
import { ReactComponent as React } from '../../assets/images/react.svg';
import { ReactComponent as Node } from '../../assets/images/nodejs.svg';
// Gif
import { ReactComponent as Image } from '../../assets/images/giphy.gif';

export const About = () => {
	return (
		<div className="about-container">
			<h2 className="about-title">About Me</h2>
			<div className="image-gif"></div>
			<h4 className="about-name">Hi 👋, I'm Victor Ottati</h4>
			<h3 align="center">A passionate full stack website developer</h3>
			<p className="about-description">
				Engineer, Photographer and Fullstack website developer with React JS
				Node Js and Express
			</p>
			<section className="logos-container">
				<Mongo />
				<Express />
				<React />
				<Node />
			</section>
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
