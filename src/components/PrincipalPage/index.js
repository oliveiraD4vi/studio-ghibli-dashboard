import FilmCard from '../FilmCard';
import FilmSearch from '../FilmSearch';

import './style.scss';

export default function PrincipalPage() {
	return (
		<>
			<div className="general-container">
				<div className="film-info">
					<FilmCard id="2baf70d1-42bb-4437-b551-e5fed5a87abe" />
				</div>

				<div className="content">
					<div className="showcase-up">
						<FilmSearch />
					</div>

					<div className="showcase-down"></div>

					<div className="rodape">by Davi Oliveira | 2021</div>
				</div>
			</div>
		</>
	);
}
