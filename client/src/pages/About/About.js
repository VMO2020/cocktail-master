import { useEffect } from 'react';
import './About.css';

// MERN
import { ReactComponent as Mongo } from '../../assets/images/mongodb.svg';
import { ReactComponent as Express } from '../../assets/images/express.svg';
import { ReactComponent as React } from '../../assets/images/react.svg';
import { ReactComponent as Node } from '../../assets/images/nodejs.svg';

// Social
import { ReactComponent as GitHub } from '../../assets/images/github.svg';
import { ReactComponent as Linkedin } from '../../assets/images/linkedin.svg';
import { ReactComponent as NPM } from '../../assets/images/npm2.svg';

// Gif
// import { ReactComponent as Image } from '../../assets/images/giphy.gif';

export const About = () => {
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, []);

	return (
		<div className="about-container">
			<div className="image-gif"></div>
			<h1 className="about-title">
				<span>About</span> Me
			</h1>
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
			<div className="links-social-container">
				<a
					href={'https://www.npmjs.com/package/create-html-css-js'}
					target="_blank"
					rel="noreferrer"
					className="web-link"
				>
					<NPM />
				</a>
				<a
					href={'https://github.com/VMO2020'}
					target="_blank"
					rel="noreferrer"
					className="web-link"
				>
					<GitHub />
				</a>
				<a
					href={'https://www.linkedin.com/in/ottati-victor-172b6124/'}
					target="_blank"
					rel="noreferrer"
					className="web-link"
				>
					<Linkedin />
				</a>
			</div>
		</div>
	);
};
