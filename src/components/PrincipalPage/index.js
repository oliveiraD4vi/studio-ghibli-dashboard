import { useContext } from 'react';

import FilmCard from '../FilmCard';
import FilmSearch from '../FilmSearch';
import PeopleSearch from '../People';

import { FilmInfoContext } from '../../context/FilmInfoContext';

import './style.scss';

export default function PrincipalPage() {
	const { filmId } = useContext(FilmInfoContext);

	return (
		<>
			<div className="general-container">
				<div className="film-info">
					<FilmCard id={filmId} />
				</div>

				<div className="content">
					<div className="showcase-up">
						<FilmSearch />
					</div>

					<div className="showcase-down">
						<div className="people">
							<PeopleSearch />
						</div>

						<div className="species"></div>

						<div className="locations"></div>
					</div>
				</div>
			</div>
		</>
	);
}
