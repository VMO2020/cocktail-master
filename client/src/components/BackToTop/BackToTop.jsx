import './BackToTop.css';

export const BackToTop = () => {
	const handleBackToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};
	return (
		<div className="btn-container">
			<button onClick={handleBackToTop}>Back To Top</button>
		</div>
	);
};
