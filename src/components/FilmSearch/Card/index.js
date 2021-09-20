import { useContext } from 'react';
import { FilmInfoContext } from '../../../context/FilmInfoContext';

import PropTypes from 'prop-types';

import './style.scss';

export default function Card({ title, id }) {
	const { setFilmId } = useContext(FilmInfoContext);

	return (
		<>
			<div className="card-showcase" onClick={() => setFilmId(id)}>
				<h3>{title}</h3>
			</div>
		</>
	);
}

Card.propTypes = {
	title: PropTypes.string,
	id: PropTypes.string
};
