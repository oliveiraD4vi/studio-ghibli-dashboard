import FilmCard from '../FilmCard';

import './style.scss';

export default function PrincipalPage() {
	return (
		<>
			<div className="general-container">
				<div className="film-info">
					<FilmCard />
				</div>

				<div className="content">
					<div className="showcase-up"></div>

					<div className="showcase-down"></div>

					<div className="rodape">by Davi Oliveira | 2021</div>
				</div>
			</div>
		</>
	);
}
